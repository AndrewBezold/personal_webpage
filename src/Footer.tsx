import React from "react";
import { Flex, Image, ActionIcon } from "@mantine/core";
import { IconContext } from "react-icons";
import { MdOutlineEmail } from "react-icons/md";
import LinkedInIcon from "./static/icons/linkedin.svg";
import GithubIcon from "./static/icons/github.svg";
import GitlabIcon from "./static/icons/gitlab.svg";
import classes from "./footer.module.css";

export function Footer() {
  return (
    <Flex className={classes.footer}>
      <ActionIcon
        variant="subtle"
        color="white"
        component="a"
        href="mailto:andrew.bezold@gmail.com"
      >
        <IconContext.Provider value={{ size: "20px" }}>
          <MdOutlineEmail />
        </IconContext.Provider>
      </ActionIcon>
      <ActionIcon
        variant="subtle"
        color="white"
        component="a"
        href="https://www.linkedin.com/in/andrew-bezold-425025100/"
      >
        <Image src={LinkedInIcon} h="30px" w="30px" fit="contain" />
      </ActionIcon>
      <ActionIcon
        variant="subtle"
        color="white"
        component="a"
        href="https://github.com/AndrewBezold"
      >
        <Image src={GithubIcon} h="20px" w="20px" fit="contain" />
      </ActionIcon>
      <ActionIcon
        variant="subtle"
        color="white"
        component="a"
        href="https://gitlab.com/andrew.bezold"
      >
        <Image src={GitlabIcon} h="30px" w="30px" fit="contain" />
      </ActionIcon>
    </Flex>
  );
}
