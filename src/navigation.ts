import type { ScreenProps } from "expo-router/build/useScreens"

import { SCREEN_NAMES } from "./lib/constants"

export const screens: ScreenProps[] = [
  {
    name: SCREEN_NAMES.HOME,
    options: { title: "Home", headerShown: false }
  },
  {
    name: SCREEN_NAMES.LOGIN,
    options: { title: "Login", headerShown: false }
  }
]