import { Redirect, Stack } from "expo-router"

import { useAuthStore } from "@/stores"

export default function AuthLayout() {
  const { session } = useAuthStore()

  // If authenticated, redirect to home
  if (session) return <Redirect href="/(pages)/home" />

  return (
    <Stack>
      {/* Login */}
      <Stack.Screen
        name={"login"}
        options={{ headerShown: false }}
      />

      {/* Register */}
      <Stack.Screen
        name={"sign-up"}
        options={{ headerShown: false }}
      />
    </Stack>
  )
}