import { Href, Redirect } from "expo-router"

import { useAuthStore } from "@/stores"

export default function Index() {
  const { session } = useAuthStore()

  const href: Href = session ? "/(pages)/home" : "/(auth)/login"

  return <Redirect href={href} />
}