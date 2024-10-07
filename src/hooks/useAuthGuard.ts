import { useEffect } from "react"

import { useRouter } from "expo-router"

import { useAsyncStorage } from "./useAsyncStorage"

import { UI } from "@/lib/constants"
import { User } from "@/lib/types"
import { useAuthStore } from "@/stores"

export function useAuthGuard() {
  const { user, token, setUser, logout } = useAuthStore()
  const router = useRouter()
  const { value: storedUser } = useAsyncStorage<User>(UI.LOCALSTORAGE.USER_TOKEN_KEY)

  useEffect(() => {
    if (!storedUser) logout()
    setUser(storedUser as User, "")
  }, [storedUser, setUser, logout])

  useEffect(() => {
    if (!user || !token) {
      // Redirect to login
      router.push( { pathname: "/(auth)/login" })
    } else {
      console.warn("Usuario autenticado. Página actual:", router)
    }
  }, [user, token, router])

  return null
}

export default useAuthGuard