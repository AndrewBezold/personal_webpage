import { Flex, Anchor, Text } from "@mantine/core";
import Projects from "../static/projects.json";
import classes from "./ProjectsTab.module.css";

interface DescriptionPiece {
  type: string;
  string: string;
  link?: string;
}

function parseDescription(description: Array<DescriptionPiece>) {
  return description.map((piece, index) =>
    piece.type === "string" ? (
      piece.string
    ) : (
      <Anchor key={index} href={piece.link}>{piece.string}</Anchor>
    )
  );
}

interface ProjectProps {
  name: string;
  link: string;
  description: Array<DescriptionPiece>;
}

function Project({ name, link, description }: ProjectProps) {
  return (
    <Flex direction="column" gap="xs" className={classes.project}>
      <Anchor size="xl" href={link} fw={600}>
        {name}
      </Anchor>
      <Text>{parseDescription(description)}</Text>
    </Flex>
  );
}

export function ProjectsTab() {
  return (
    <Flex direction="column" gap="md" w="100%">
      {Projects.map((project: ProjectProps) => (
        <Project
          key={project.name}
          name={project.name}
          link={project.link}
          description={project.description}
        />
      ))}
      <Flex className={classes.links}>
        <Anchor href="https://github.com/AndrewBezold">Github</Anchor>
        <Anchor href="https://gitlab.com/andrew.bezold">Gitlab</Anchor>
      </Flex>
    </Flex>
  );
}
