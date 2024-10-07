import { Slot } from "expo-router"

import "@/lib/config/i18n"
import { SessionProvider } from "@/providers/session-provider"

export default function RootLayout() {

  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  )
}
