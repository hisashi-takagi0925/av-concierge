import { Button } from "@mantine/core";
import { FC } from "react";
import { StandardButtonProps } from "./types";

const StandardButton: FC<StandardButtonProps> = (props) => (
  <Button
    color={props.color}
    type={props.type}
    size={props.size}
    variant={props.variant}
    disabled={props.disabled}
    loading={props.loading}
    leftIcon={props.leftIcon}
    rightIcon={props.rightIcon}
  >
    {props.children}
  </Button>
);

export default StandardButton;
