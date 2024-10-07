import { Redirect, Stack } from "expo-router"

import { useAuthStore } from "@/stores"

export default function PagesLayout() {
  const { session } = useAuthStore()

  // If not authenticated, redirect to login
  if (!session) return <Redirect href="/(auth)/login" />

  return (
    <Stack>
      {/* Home */}
      <Stack.Screen
        name={"home"}
        options={{ title: "Home", headerBackVisible: false }}
      />
    </Stack>
  )
}