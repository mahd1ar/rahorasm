import { COOKIES } from "~/data/types";



type DjangoJWTRefreshResponde = {
  access: string,
  refresh: string
} | {
  detail: string,
  code: string
}

export default defineNuxtPlugin(() => {
  const appState = useAppState()
  const route = useRoute()

  const headers: [string, string][] = []

  if (import.meta.server) {
    const cookie = useRequestHeader('cookie')
    if (cookie) { headers.push(['cookie', cookie]) }
  }

  // JWT Section
  const accessToken = useCookie(COOKIES.Access);
  const refreshToken = useCookie(COOKIES.Refresh);

  if (accessToken.value) {
    headers.push(['Authorization', `Bearer ${accessToken.value}`])
  }

  const $api = $fetch.create({
    headers,
    credentials: 'include',
    baseURL: import.meta.dev ? 'http://192.168.1.54:8000' : 'https://rahorasm.msdcorporation.top',
    retry: 2,
    onRequest(ctx) {

      if (accessToken.value) {
        ctx.options.headers.delete('Authorization')
        ctx.options.headers.delete('authorization')
        ctx.options.headers.append('Authorization', `Bearer ${accessToken.value}`)
      }

    },
    onResponseError(ctx) {

      // if (ctx.response.status === 401) {
      //   navigateTo({ path: '/login', query: { go: route.fullPath } })
      // }

      if (ctx.response._data.message) {
        //   appState.addToast({
        //     type: 'error',
        //     body: ctx.response.statusText + (ctx.response._data.message ? ' : ' + ctx.response._data.message : '')
        //   })
      }
    },
    async onResponse(ctx) {

      if (ctx.response.status === 401) {
        try {
          if (!refreshToken.value)
            return

          console.log('getting a new token')

          const newResponse =
            await $fetch<DjangoJWTRefreshResponde>('https://rahorasm.msdcorporation.top/api/token/refresh/', {
              method: 'POST',
              body: {
                refresh: refreshToken.value
              }
            });

          if ('access' in newResponse) {
            accessToken.value = newResponse.access
            refreshToken.value = newResponse.access
            console.log("new token is issued")
          }



        } catch (error) {
          console.error("Token refresh failed:", error);
        }
      }

      if (ctx.response.ok && ctx.response._data.message) {
        //   appState.addToast({
        //     type: 'success',
        //     body: ctx.response._data.message
        //   })
      }
    }

  })
  // Expose to useNuxtApp().$api
  return {
    provide: {
      api: $api
    }
  }
})