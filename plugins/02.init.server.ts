import { COOKIES } from "~/data/types"
import type { NavbarItem } from "~/stores/appState"

export default defineNuxtPlugin(async (nuxtApp) => {
    console.log("Server init")
    const { $api } = useNuxtApp()
    const appState = useAppState()
    const sessionCookie = useCookie(COOKIES.Access)
    const refreshCookie = useCookie(COOKIES.Refresh)

    const { load } = useGetUserData()

    try {
        

        const isLoggedIn = await load()
        if(!isLoggedIn){
            sessionCookie.value = null
            refreshCookie.value = null
        }

        const res = await $api<NavbarItem[]>('/tour/navbar/')
        
        
        if (Array.isArray(res))
            appState.setNavbar(res)
    } catch (error) {
        console.log(error)
    }

})
