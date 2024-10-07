import { create } from "zustand"

import { AuthState, User } from "@/lib/types"

export const useAuthStore = create<AuthState>(set => ({
  // State
  user: null,
  token: "",

  // Mutations
  setUser: (user: User, token: string) => set({ user, token }),
  logout: () => set({ user: null, token: null })
}))