import React from "react";
import {
  Flex,
  Anchor,
  Text,
  TextInput,
  Textarea,
  Button,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export function ContactTab() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      name: isNotEmpty("Enter your name"),
      email: isNotEmpty("Enter your email address"),
      message: isNotEmpty("Enter a message"),
    },
  });

  interface formProps {
    name: string;
    email: string;
    message: string;
  }

  async function handleEmail(values: formProps) {
    const url = "https://portfolio.ddns.net:3001/api/email";

    setLoading(true);
    setError(null);
    axios.post(url, values)
      .then(() => {
        toast.success('Message sent successfully!');
        form.reset();
      })
      .catch(() => {
        setError("There was a problem sending this message.  Try sending an email instead.");
      })
      .finally(() => {
        setLoading(false);
      });
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
        <form onSubmit={form.onSubmit(handleEmail)}>
          <Flex direction="column" gap="sm">
            <Flex direction="column">
              <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
              <TextInput label="Email" placeholder="name@example.com" {...form.getInputProps('email')} />
              <Textarea label="Message" placeholder="Message goes here" {...form.getInputProps('message')} />
            </Flex>
            <Button type="submit" loading={loading}>
              Send Message
            </Button>
            {error ? (
              <Text size="xs" c="red">
                {error}
              </Text>
            ) : null}
          </Flex>
        </form>
      </Flex>
      <ToastContainer position="bottom-center" theme="dark" />
    </Flex>
  );
}
