export interface LabelProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl";
    weight?: "lt" | "nm" | "md" | "sm" | "bd" | "xb" | "bl";
    align?: "left" | "center" | "right" | "justify";
    type?: "primary" | "secondary" | "danger" | "success" | "warning" | "gray" | "white" | "black";
    transform?: "up" | "low" | "cap" | "normal";
    decoration?: "ul" | "lt" | "none";
    italic?: boolean;
    opacity?: "100" | "75" | "50" | "25";
    tracking?: "tight" | "normal" | "wide" | "wider" | "widest";
    ls?: "tight" | "snug" | "normal" | "relax" | "loose";
    class?: string;
    children: React.ReactNode
  }
