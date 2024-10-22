import { defineStore } from 'pinia'

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


export type User = {
    id: string,
    name: string,
    phone: string
}

export interface NavbarItem {
  id: number
  name: string
  path?: string
  children?: NavbarItem[]
}


export const useAppState = defineStore('appState', {
  state () {
    return {
      _user: {
        id: '',
        name: '',
      } as User,
      _navbar: [] as NavbarItem[] ,
      _isLoading: true
    }
  },
  getters: {
    navbar: state => state._navbar,
    isAuth: state => !!state._user.id,
    user: state => ({ ...state._user }),
    isLoading: state => state._isLoading
  },
  actions: {
    // user actions:
    setUser (user:  User) {
      Object.assign(this._user, user)
    },
    deleteUser () {
      this._user = {
        id: '',
        name: '',
        phone: ''
      }
    },

    fetchUser(){

      

    },

    setNavbar(n: NavbarItem[]){
      n.forEach(i => {
        this._navbar.push(i)
      })
    },

    // loading actions
    toggleLoading (newVal?: boolean) {
      this._isLoading = newVal !== undefined ? newVal : !this.isLoading
    }
  }
})