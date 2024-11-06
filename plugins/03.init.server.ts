import type { NavbarItem } from "~/stores/appState"

export default defineNuxtPlugin(async (nuxtApp) => {

    const { $api, $fetchUserData } = useNuxtApp()
    const appState = useAppState()

    try {

        const res = await $api<NavbarItem[]>('/tour/navbar/')
        
        await $fetchUserData()
        
        if (Array.isArray(res))
            appState.setNavbar(res)
    } catch (error) {
        console.log(error)
    }

})
