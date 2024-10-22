import { COOKIES } from "~/data/types";

export default defineNuxtPlugin(() => {
 

    // Expose to useNuxtApp().$api
    return {
      provide: {
        fetchToken : () => {}
      }
    }
  })