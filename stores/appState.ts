import { defineStore } from 'pinia'

type User = {
    id: string,
    name: string,
    phone: string
}

export const useAppState = defineStore('appState', {
  state () {
    return {
      _user: {
        id: '',
        name: '',
      } as User,

      // Toasts state
    //   _toasts: [] as Toast[],

      // loading state
      _isLoading: true
    }
  },
  getters: {
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


    // loading actions
    toggleLoading (newVal?: boolean) {
      this._isLoading = newVal !== undefined ? newVal : !this.isLoading
    }
  }
})