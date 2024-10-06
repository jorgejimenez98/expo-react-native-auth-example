import { cva } from "class-variance-authority"

export const flexVariants = cva("flex", {
  variants: {
    dir: {
      row: "flex-row",
      col: "flex-col"
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly"
    },
    items: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch"
    },
    wrap: {
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
      "wrap-reverse": "flex-wrap-reverse"
    },
    gap: {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      none: "gap-0"
    }
  },
  defaultVariants: {
    dir: "row",
    justify: "start",
    items: "start",
    wrap: "nowrap",
    gap: "none"
  }
})