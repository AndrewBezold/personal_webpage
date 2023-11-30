import React from "react";
import { Flex, SimpleGrid, Text, Title, Image } from "@mantine/core";
import WorkExperience from "../static/work_experience.json";
import PythonIcon from "../static/icons/python.svg";
import DjangoIcon from "../static/icons/django.png";
import JavaScriptIcon from "../static/icons/javascript.png";
import TypeScriptIcon from "../static/icons/typescript.svg";
import ReactIcon from "../static/icons/react.svg";
import KotlinIcon from "../static/icons/kotlin.svg";
import PostgreSQLIcon from "../static/icons/postgresql.svg";
import GitIcon from "../static/icons/git.svg";

interface JobProps {
  company: string;
  title: string;
  dates: string;
  experience: Array<string>;
}

function Job({ company, title, dates, experience }: JobProps) {
  return (
    <Flex direction="column">
      <Flex direction="column">
        <Flex justify="space-between" align="end" w="400px">
          <Title order={3}>{company}</Title>
          <Text>{dates}</Text>
        </Flex>
        <Text>{title}</Text>
      </Flex>
      <Flex direction="column" mt="sm">
        {experience.map((line) => (
          <Text pl="xl">- {line}</Text>
        ))}
      </Flex>
    </Flex>
  );
}

interface SkillProps {
  name: string;
  icon: string;
}

const skills: Array<SkillProps> = [
  {
    name: "Python",
    icon: PythonIcon,
  },
  {
    name: "Django",
    icon: DjangoIcon,
  },
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Kotlin",
    icon: KotlinIcon,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQLIcon,
  },
  {
    name: "Git",
    icon: GitIcon,
  },
];

export function WorkTab() {
  return (
    <Flex direction="column" gap="xl">
      <Flex direction="column">
        <Title order={2}>Education</Title>
        <Flex pl="lg" direction="column">
          <Text>University of Louisville, 2015</Text>
          <Text>B.S. Computer Engineering/Computer Science</Text>
        </Flex>
      </Flex>
      <Flex direction="column" gap="sm">
        <Title order={2}>Skills</Title>
        <Flex>
          <SimpleGrid cols={skills.length} spacing="md" verticalSpacing="xs">
            {skills.map((skill) => (
              <Flex justify="center">
                <Image src={skill.icon} w="100px" fit="contain" />
              </Flex>
            ))}
            {skills.map((skill) => (
              <Flex justify="center">
                <Text>{skill.name}</Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
      <Flex direction="column" gap="md">
        {WorkExperience.map((job) => (
          <Job
            company={job.company}
            title={job.title}
            dates={job.dates}
            experience={job.experience}
          />
        ))}
      </Flex>
    </Flex>
  );
}
