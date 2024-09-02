import {
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Group,
  Box,
  Divider,
  Title,
  Space,
  Paper,
  BackgroundImage,
} from "@mantine/core";
import { useForm, isEmail, isNotEmpty } from "@mantine/form";
import "./Login.css";
import backgroundImage from "../assets/loginBackground.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { useState } from "react";

const Login = () => {
  const navigation = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const form = useForm({
    initialValues: {
      identifier: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      identifier: isEmail("invalid identifier"),
      password: isNotEmpty("invalid password, it cannot be empty"),
      termsOfService: (value) => (value ? false : "Accept or else..."),
    },
  });

  return (
    <BackgroundImage src={backgroundImage}>
      <Box
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          radius: "xs",
          p: "xl",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper className="pager" shadow="xl" radius="xs" p="xl" m="xl">
          <Box>
            <Title>Welcome back</Title>
            <Divider label="Login" labelPosition="left" />
            <Space h="lg" />
            <form
              onSubmit={form.onSubmit(async (values) => {
                setSubmitting(true);
                const { identifier, password } = values;
                try {
                  const response = await customFetch.post("/auth/local", {
                    identifier,
                    password,
                  });
                  toast.success("Logged in successfully");
                  return navigation("/inventory");
                } catch (error) {
                  console.log(error);
                  setSubmitting(false);
                  toast.error("something went wrong");
                  return null;
                }
              })}
            >
              <TextInput
                withAsterisk
                label="identifier"
                name="identifier"
                placeholder="your@identifier.com"
                {...form.getInputProps("identifier")}
              />

              <Space h="sm" />

              <PasswordInput
                label="Password"
                name="password"
                withAsterisk
                placeholder="yourPassword1234"
                {...form.getInputProps("password")}
              />

              <Checkbox
                color="red.9"
                mt="md"
                label="I agree to sell my privacy"
                {...form.getInputProps("termsOfService", { type: "checkbox" })}
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit" variant="gradient" disabled={submitting}>
                  {submitting ? "submitting..." : "submit"}
                </Button>
              </Group>
            </form>
          </Box>
        </Paper>
      </Box>
    </BackgroundImage>
  );
};

export default Login;
