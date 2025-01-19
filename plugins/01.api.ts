import { COOKIES } from "~/data/types";



type DjangoJWTRefreshResponde = {
  access: string,
  refresh: string
} | {
  detail: string,
  code: string
}

export default defineNuxtPlugin(() => {


  // JWT Section
  const accessToken = useCookie(COOKIES.Access);
  const refreshToken = useCookie(COOKIES.Refresh);

  // if (import.meta.server) {
  //   console.log("[api] server")
  //   const cookie = useRequestHeader('cookie')
  //   if (cookie) { headers.push(['cookie', cookie]) }
  // }


  
  const baseURL = import.meta.dev ? 'http://192.168.1.54:8000' : 'https://rahorasm.msdcorporation.top';
  // const baseURL = 'https://rahorasm.msdcorporation.top';

  const $api = $fetch.create({
    credentials: 'include',
    baseURL,
    retry: 2,
    retryDelay: 100,
    retryStatusCodes: [401, 408, 409, 425, 429, 500, 502, 503, 504],
    onRequest(ctx) {
      
      console.log("[DEBUG]: sending request to : " + ctx.request.toString()  )
      
      ctx.options.headers.delete('Authorization')
      ctx.options.headers.delete('authorization')
      
      if (accessToken.value)
        ctx.options.headers.append('Authorization', `Bearer ${accessToken.value}`)
       

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

          console.log('[DEBUG]: 401: getting a new token')
          

          const newResponse =
            await $fetch<DjangoJWTRefreshResponde>(baseURL + '/token/refresh/', {
              method: 'POST',
              body: {
                refresh: refreshToken.value
              }
            });

          if ('access' in newResponse) {
            console.log("[DEBUG]: new token is issued")
            accessToken.value = newResponse.access
            refreshToken.value = newResponse.refresh
          }



        } catch (error) {
          console.error("Token refresh failed:", error);
          accessToken.value = null
          refreshToken.value = null
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