import React from "react";
import { Flex, Anchor, Text, TextInput, Textarea, Button } from "@mantine/core";

export function ContactTab() {
  const [loading, setLoading] = React.useState(false);
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async function handleEmail() {
    setLoading(true);
    await sleep(2000).then(() => setLoading(false));
    //attempt email api call
    //on failure, display error
  }
  return (
    <Flex w="100%" justify="center">
      <Flex direction="column" gap="md">
        <Text>
          Send me an{" "}
          <Anchor href="mailto:andrew.bezold@gmail.com">email</Anchor>
        </Text>
        <Text>
          Message me on{" "}
          <Anchor href="https://www.linkedin.com/in/andrew-bezold-425025100/">
            LinkedIn
          </Anchor>
        </Text>
        <Text>Send me a message using the form below:</Text>
        <Flex direction="column" gap="sm">
          <Flex direction="column">
            <TextInput label="Name" placeholder="Name" />
            <TextInput label="Email" placeholder="name@example.com" />
            <Textarea label="Message" placeholder="Message goes here" />
          </Flex>
          <Button onClick={handleEmail} loading={loading}>
            Send Message
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
