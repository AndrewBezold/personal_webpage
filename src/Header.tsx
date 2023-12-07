import React from "react";

import { Flex, Tabs, Button } from "@mantine/core";
import { TabType } from "./Content";
import Resume from "./static/Resume_Andrew_Bezold_20231206.pdf";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  tabs: Array<TabType>;
}

export function Header({ activeTab, setActiveTab, tabs }: HeaderProps) {

  const handleTabChange = (value: string | null) => {
    setActiveTab(value === null ? "about" : value);
  };

  return (
    <Flex justify="space-between" bg="var(--mantine-color-dark-5)" h="36px">
      <Flex align="center">
        <Button variant="subtle" color="white">
          Andrew Bezold
        </Button>
      </Flex>
      <Flex gap="md">
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Tab value={tab.id}>{tab.name}</Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
        <Flex gap="sm">
          <Button
            component="a"
            download="Andrew_Bezold_Resume.pdf"
            href={Resume}
          >
            Download Resume
          </Button>
        </Flex>
      </Flex>
      <div />
    </Flex>
  );
}
