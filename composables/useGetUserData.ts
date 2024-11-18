import { COOKIES } from "~/data/types";

interface Failed {
  detail: string
  code: string
  messages: Message[]
}

interface Success {
  payload: Payload
}

export interface Payload {
  id: number
  name: any
  phone_number: string
  email: any
  is_staff: boolean
}


interface Message {
  token_class: string
  token_type: string
  message: string
}


export const useGetUserData = () => {
  

  const appState = useAppState()
  const { $api } = useNuxtApp()
  const sessionCookie = useCookie(COOKIES.Access)



  async function load() {
    try {
      
      console.log("[fetching user data] start")
  
      if (!sessionCookie.value) return false
  
      const res = await $api<Success | Failed>('/auth/user-session')

      if ('payload' in res) {

        appState.setUser({
          id: res.payload.id,
          name: res.payload.name,
          phone: res.payload.phone_number
        })

        return true
      }
    } catch (error) {
      console.error(error)
      return false
    }

  }

  return {
    load
  }
}
