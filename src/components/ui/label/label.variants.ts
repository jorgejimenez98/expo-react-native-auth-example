import { cva } from "class-variance-authority"

export const labelVariants = cva("", {
  variants: {
    size: { // Font size
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl"
    },
    weight: { // Font weight
      lt: "font-light",
      nm: "font-normal",
      md: "font-medium",
      sm: "font-semibold",
      bd: "font-bold",
      xb: "font-extrabold",
      bl: "font-black"
    },
    align: { // Text alignment
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify"
    },
    type: { // Text color
      primary: "text-primary",
      secondary: "text-secondary",
      danger: "text-red-600",
      success: "text-green-600",
      warning: "text-yellow-500",
      gray: "text-gray-500",
      white: "text-white",
      black: "text-black"
    },
    transform: { // Text transformation
      up: "uppercase",
      low: "lowercase",
      cap: "capitalize",
      normal: "normal-case"
    },
    decoration: { // Text decoration
      ul: "underline",
      lt: "line-through",
      none: "no-underline"
    },
    italic: { // Italics
      true: "italic"
    },
    opacity: { // Opacity level
      "100": "opacity-100",
      "75": "opacity-75",
      "50": "opacity-50",
      "25": "opacity-25"
    },
    tracking: { // Letter spacing
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest"
    },
    ls: { // Line spacing
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relax: "leading-relaxed",
      loose: "leading-loose"
    }
  },
  defaultVariants: {
    size: "md",
    weight: "nm",
    align: "left",
    tracking: "normal",
    ls: "normal"
  }
})
