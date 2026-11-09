import { Flex, Tabs, Button } from "@mantine/core";
import { TabType } from "./Content";
import Resume from "./static/Resume_Andrew_Bezold_20260814.pdf";
import classes from "./Header.module.css";

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
    <Flex className={classes.header}>
      <Button variant="subtle" px="xs" className={classes.wordmark}>
        Andrew Bezold
      </Button>
      <Flex className={classes.navGroup}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="pills"
          radius="xl"
          classNames={{ root: classes.tabsRoot, list: classes.tabsList }}
        >
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Tab key={tab.id} value={tab.id}>{tab.name}</Tabs.Tab>
            ))}
          </Tabs.List>
          <span className={classes.scrollHint} aria-hidden="true">›</span>
        </Tabs>
        <Button
          component="a"
          download="Andrew_Bezold_Resume.pdf"
          href={Resume}
          variant="outline"
          color="cyan"
          radius="xl"
          className={classes.cta}
        >
          Download Resume
        </Button>
      </Flex>
    </Flex>
  );
}
