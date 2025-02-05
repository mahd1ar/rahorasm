import type { set } from '@vueuse/core'
import { defineStore } from 'pinia'


export type User = {
    id: number,
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
        id: 0,
        name: '',
      } as User,
      _navbar: [] as NavbarItem[] ,
      _isLoading: true,
      _contact: {
        telegram: '',
        email: '',
        phone: '',
        address: '',
        facebook: '',
        instagram: '',
        twitter: '',
        whatsapp: ''
      }
    }
  },
  getters: {
    navbar: state => state._navbar,
    isAuth: state => !!state._user.id,
    user: state => ({ ...state._user }),
    isLoading: state => state._isLoading,
    contact: state => ({ ...state._contact })
  },
  actions: {
    setContact (contact: any) {
      Object.assign(this._contact, contact)
    },
    // user actions:
    setUser (user:  User) {
      Object.assign(this._user, user)
    },
    deleteUser () {
      this._user = {
        id: 0,
        name: '',
        phone: ''
      }
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