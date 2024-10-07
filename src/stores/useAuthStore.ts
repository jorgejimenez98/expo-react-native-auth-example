import { create } from "zustand"

import { useAsyncStorage } from "@/hooks"
import { UI } from "@/lib/constants"
import { AuthState, User } from "@/lib/types"

export const useAuthStore = create<AuthState>(set => {
  const { value: storedUser } = useAsyncStorage<User>(UI.LOCALSTORAGE.USER_TOKEN_KEY)

  return {
    user: storedUser,
    token: "",

    setUser: (user: User, token: string) => {
      set({ user, token })
    },

    logout: () => {
      set({ user: null, token: null })
    }
  }
})