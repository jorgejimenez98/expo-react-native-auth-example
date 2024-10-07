import React from "react"

import { View } from "react-native"

import type { FlexProps } from "./flex.properties"
import { flexVariants } from "./flex.variants"

import { cn } from "@/lib/config"

export function Flex(props: FlexProps) {
  const { class: htmlClass, children, style, ...restProps } = props

  return (
    <View
      className={cn(
        flexVariants({ ...restProps }),
        htmlClass
      )}
      style={style}
    >
      {children}
    </View>
  )
}
