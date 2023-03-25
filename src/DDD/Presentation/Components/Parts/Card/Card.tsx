import { FC, ReactNode } from "react";
// import styles from "./Card.module.scss";
import { Card, Group, Menu, Text } from "@mantine/core";
import { CardProps } from "./types";

const actionIcon = (icon: ReactNode) => (
  <Menu withinPortal position="bottom-end" shadow="sm">
    <Menu.Target>{icon}</Menu.Target>
  </Menu>
);

const cardSection = (props: CardProps) => (
  <Card.Section
    withBorder
    inheritPadding
    py="xs"
    style={{
      color: "dimgray",
      marginBottom: "15px",
    }}
  >
    <Group position="apart">
      <Text weight={600} size="md">
        {props.title}
      </Text>
      {props.actionIcon && actionIcon(props.actionIcon)}
    </Group>
  </Card.Section>
);

const Cards: FC<CardProps> = (props) => (
  <Card
    withBorder
    // shadow="sm"
    radius="md"
    style={
      {
        // borderColor: "dimgray",
      }
    }
  >
    {cardSection(props)}
    {props.children}
  </Card>
);

export default Cards;
