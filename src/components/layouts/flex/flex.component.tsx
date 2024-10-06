import React from "react"

import { View } from "react-native"

import type { FlexProps } from "./flex.properties"
import { flexVariants } from "./flex.variants"

import { cn } from "@/lib/config"

export function Flex({
  dir,
  justify,
  items,
  wrap,
  gap,
  className,
  children,
  style
}: FlexProps) {

  return (
    <View
      className={cn(
        flexVariants({ dir, justify, items, gap, wrap }),
        className
      )}
      style={style}
    >
      {children}
    </View>
  )
}
