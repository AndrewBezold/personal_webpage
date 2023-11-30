import React from "react";
import { Flex, Anchor, Text } from "@mantine/core";
import Projects from "../static/projects.json";

interface DescriptionPiece {
  type: string;
  string: string;
  link?: string;
}

function parseDescription(description: Array<DescriptionPiece>) {
  return description.map((piece) =>
    piece.type === "string" ? (
      piece.string
    ) : (
      <Anchor href={piece.link}>{piece.string}</Anchor>
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
    <>
      <Anchor size="xl" href={link}>
        {name}
      </Anchor>
      <Text pl="xl">{parseDescription(description)}</Text>
    </>
  );
}

export function ProjectsTab() {
  return (
    <Flex direction="column" gap="md">
      {Projects.map((project: ProjectProps) => (
        <Project
          name={project.name}
          link={project.link}
          description={project.description}
        />
      ))}
      <Flex direction="column">
        <Anchor href="https://github.com/AndrewBezold">Github</Anchor>
        <Anchor href="https://gitlab.com/andrew.bezold">Gitlab</Anchor>
      </Flex>
    </Flex>
  );
}
