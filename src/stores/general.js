import { defineStore } from 'pinia'

export const useGeneralStore = defineStore({
  id: 'general',
  state: () => ({
    showLoader: true
  }),
  getters: {},
  actions: {}
})
