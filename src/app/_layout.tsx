import { Stack } from "expo-router"

import "@/lib/config/i18n"
import { useAuthGuard } from "@/hooks"
import { screens } from "@/navigation"

export default function RootLayout() {

  // Guard
  useAuthGuard()

  return (
    <Stack>
      {/* Screens */}
      {screens.map((screen, idx) => (
        <Stack.Screen
          key={idx}
          {...screen}
        />
      ))}
    </Stack>
  )
}
