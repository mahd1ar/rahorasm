import type { NavbarItem } from "~/stores/appState"

export default defineNuxtPlugin(async (nuxtApp) => {

    const { $api, $fetchUserData } = useNuxtApp()
    const appState = useAppState()

    try {

        await $fetchUserData()
        const res = await $api<NavbarItem[]>('/tour/navbar/')
        if (Array.isArray(res))
            appState.setNavbar(res)
    } catch (error) {
        console.log(error)
    }

})
