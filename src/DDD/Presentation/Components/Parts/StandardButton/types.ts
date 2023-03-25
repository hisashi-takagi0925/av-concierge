import { MantineColor, Variants } from "@mantine/core";
import { ReactNode } from "react";

export type StandardButtonProps = {
  variant?: Variants<
    "outline" | "white" | "light" | "default" | "filled" | "gradient" | "subtle"
  >;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  type: "button" | "reset" | "submit";
  color?: MantineColor;
  disabled?: boolean;
  loading?: boolean;
  leftIcon: ReactNode;
  rightIcon: ReactNode;
  children?: ReactNode;
};
