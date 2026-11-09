import React from "react";
import "@mantine/core/styles.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Header } from "./Header";
import { Content, TabType } from "./Content";
import { Footer } from "./Footer";
import { AboutTab } from "./tabs/AboutTab";
import { WorkTab } from "./tabs/WorkTab";
import { ProjectsTab } from "./tabs/ProjectsTab";
import { ContactTab } from "./tabs/ContactTab";

const tabs: Array<TabType> = [
  {
    id: "about",
    name: "About Me",
    tab: <AboutTab />,
  },
  {
    id: "work",
    name: "Work Experience",
    tab: <WorkTab />,
  },
  {
    id: "projects",
    name: "Projects",
    tab: <ProjectsTab />,
  },
  {
    id: "Contact Me",
    name: "Contact Me",
    tab: <ContactTab />,
  },
];

const tabsById = tabs.reduce(
  (dict, tab) => {
    dict[tab.id] = tab;
    return dict;
  },
  {} as Record<string, TabType>
);

function App() {
  const [activeTab, setActiveTab] = React.useState<string>("about");

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark" forceColorScheme="dark">
      <div className="app-mesh" aria-hidden="true" />
      <Header activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      <Content activeTab={activeTab} tabs={tabsById} />
      <Footer />
    </MantineProvider>
  );
}

export default App;
