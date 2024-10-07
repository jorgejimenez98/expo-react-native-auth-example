import React from "react"

import { Text } from "react-native"

import { LabelProps } from "./label.properties"
import { labelVariants } from "./label.variants"

import { cn } from "@/lib/config"

export function Label(props: LabelProps) {
  const { class: htmlClass, children, ...restProps } = props

  return (
    <Text
      className={cn(labelVariants({ ...restProps }), htmlClass)}
    >
      {children}
    </Text>
  )
}
