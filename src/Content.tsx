import React from "react";
import { Flex } from "@mantine/core";
import classes from "./Content.module.css";

export interface TabType {
  id: string;
  name: string;
  tab: any;
}

interface ContentProps {
  activeTab: string;
  tabs: Record<string, TabType>;
}

export function Content({ activeTab, tabs }: ContentProps) {
  return (
    <Flex className={classes.root}>
      <Flex className={classes.container}>{tabs[activeTab].tab}</Flex>
    </Flex>
  );
}
