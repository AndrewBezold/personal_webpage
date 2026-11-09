import { Flex, Text, Title, Image } from "@mantine/core";
import WorkExperience from "../static/work_experience.json";
import PythonIcon from "../static/icons/python.svg";
import DjangoIcon from "../static/icons/django.png";
import JavaScriptIcon from "../static/icons/javascript.png";
import TypeScriptIcon from "../static/icons/typescript.svg";
import ReactIcon from "../static/icons/react.svg";
import KotlinIcon from "../static/icons/kotlin.svg";
import PostgreSQLIcon from "../static/icons/postgresql.svg";
import GitIcon from "../static/icons/git.svg";
import classes from "./WorkTab.module.css";

interface JobProps {
  company: string;
  title: string;
  dates: string;
  experience: Array<string>;
}

function Job({ company, title, dates, experience }: JobProps) {
  return (
    <Flex direction="column" className={classes.job}>
      <Flex direction="column">
        <Flex className={classes.jobHeader}>
          <Title order={3}>{company}</Title>
          <Text style={{ whiteSpace: "nowrap" }} c="dimmed">{dates}</Text>
        </Flex>
        <Text className={classes.jobTitle}>{title}</Text>
      </Flex>
      <Flex direction="column" mt="sm" className={classes.bullets}>
        {experience.map((line, index) => (
          <Text key={index}>- {line}</Text>
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
    <Flex direction="column" gap="xl" w="100%">
      <Flex direction="column">
        <Title order={2}>Education</Title>
        <Flex pl="lg" direction="column">
          <Text>University of Louisville, 2015</Text>
          <Text>B.S. Computer Engineering/Computer Science</Text>
        </Flex>
      </Flex>
      <Flex direction="column" gap="sm">
        <Title order={2}>Skills</Title>
        <Flex className={classes.skills}>
          {skills.map((skill) => (
            <Flex key={skill.name} className={classes.skillChip}>
              <Image src={skill.icon} className={classes.skillIcon} fit="contain" />
              <Text size="sm">{skill.name}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex direction="column" gap="md">
        {WorkExperience.map((job) => (
          <Job
            key={job.company}
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
