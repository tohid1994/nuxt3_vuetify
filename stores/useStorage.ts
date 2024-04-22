import { defineStore } from 'pinia'

export const useStorage = defineStore("storage", {
    state: () => ({
        token: "",
        user: {},
    }),

    getters: {
        getToken: state => {
            return state.token || localStorage.getItem("token")
        },
        getUser: state => {
            return (Object.keys(state.user).length) ? state.user : localStorage.getItem("user")
        },
    },

    actions: {
        updateToken(token: any) {
            this.token = token
            localStorage.setItem("token", token)
        },
        updateUser(user: any) {
            this.user = user
            localStorage.setItem("user", JSON.stringify(user))
        },
    }
})