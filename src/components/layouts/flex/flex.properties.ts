import { StyleProp, ViewStyle } from "react-native"

export interface FlexProps {
  dir?: "row" | "col"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  items?: "start" | "center" | "end" | "stretch"
  wrap?: "nowrap" | "wrap" | "wrap-reverse"
  gap?: "sm" | "md" | "lg" | "none"
  className?: string
  children: React.ReactNode
  style?: StyleProp<ViewStyle> | undefined
}