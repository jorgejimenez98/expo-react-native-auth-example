import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"

import { UI } from "@/lib/constants"
import { AuthState } from "@/lib/types"

export const useAuthStore = create<AuthState>(set => ({
  session: null,
  isLoading: true,
  user: null,

  login: async (sessionToken: string) => {
    await AsyncStorage.setItem(UI.LOCALSTORAGE.USER_TOKEN_KEY, sessionToken)
    set({ session: sessionToken, isLoading: false })
  },

  logout: async () => {
    await AsyncStorage.removeItem(UI.LOCALSTORAGE.USER_TOKEN_KEY)
    set({ session: null, isLoading: false })
  },

  restoreSession: async () => {
    set({ isLoading: true })
    const session = await AsyncStorage.getItem(UI.LOCALSTORAGE.USER_TOKEN_KEY)
    set({ session, isLoading: false })
  }
}))