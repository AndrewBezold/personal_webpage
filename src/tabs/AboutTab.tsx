import React from "react";
import { Flex, Title, Text, Image } from "@mantine/core";
import image from "../static/headshot.png";
import about_me from "../static/about_me.txt";
import classes from "./AboutTab.module.css";

//https://stackoverflow.com/a/69718380
function format(str: string, ...args: any[]) {
  return str.replace(/{([0-9]+)}/g, function (match, index) {
    // check if the argument is there
    return typeof args[index] == "undefined" ? match : args[index];
  });
}

export function AboutTab() {
  const date = new Date();
  const current_year = date.getFullYear();
  const current_month = date.getMonth();
  const year = current_year - 2017;
  const remote_year = current_year - 2019;
  let years_experience = year.toString();
  let years_remote = remote_year.toString();
  if (current_month >= 10) {
    years_experience = (year + 1).toString();
    years_remote = (remote_year + 1).toString();
  } else if (current_month > 1) {
    years_experience += `-${year + 1}`;
    years_remote += `-${remote_year + 1}`;
  }

  const about_me_formatted = format(about_me, years_experience, years_remote);

  return (
    <Flex className={classes.root}>
      <Flex className={classes.text}>
        <Title>Andrew Bezold</Title>
        <Flex className={classes.about}>
          {about_me_formatted.split("\n").map((par) => (
            <Text>{par}</Text>
          ))}
        </Flex>
      </Flex>
      <Image src={image} w="500px" />
    </Flex>
  );
}
