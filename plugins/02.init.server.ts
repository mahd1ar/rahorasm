import type { NavbarItem } from "~/stores/appState"

export default defineNuxtPlugin(async (nuxtApp) => {

    const { $api } = useNuxtApp()
    const appState = useAppState()

    try {
        
        const res = await $api<NavbarItem[]>('/tour/navbar/')
    
        appState.setNavbar(res)
    } catch (error) {
        console.log(error)
    }

})
