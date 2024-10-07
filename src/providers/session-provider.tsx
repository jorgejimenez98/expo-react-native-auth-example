import { PropsWithChildren, useEffect } from "react"

import { useAuthStore } from "@/stores"

export function SessionProvider({ children }: PropsWithChildren) {
  const { restoreSession } = useAuthStore()

  useEffect(() => {
    restoreSession()
  }, [restoreSession])

  return <>{children}</>
}
