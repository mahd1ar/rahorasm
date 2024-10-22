import { COOKIES } from "~/data/types";
import { timeout } from "~/utils";

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

    if(accessToken.value){
      headers.push(['Authorization', `Bearer ${accessToken.value}` ])
    }

    const $api = $fetch.create({
      headers,
      credentials: 'include',
      baseURL: 'https://rahorasm.msdcorporation.top',
      onResponseError (ctx) {
        
        if (ctx.response.status === 401) {
          navigateTo({ path: '/login', query: { go: route.fullPath } })
        }
  
        if (ctx.response._data.message) {
        //   appState.addToast({
        //     type: 'error',
        //     body: ctx.response.statusText + (ctx.response._data.message ? ' : ' + ctx.response._data.message : '')
        //   })
        }
      },
      async onResponse (ctx) {

        if (ctx.response.status === 401) {
          try {
            const newToken = await $();
            accessToken.value = newToken;

            options.headers = { Authorization: `Bearer ${newToken}` };
            useFetch(url, options as UseFetchOptions<T>);
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