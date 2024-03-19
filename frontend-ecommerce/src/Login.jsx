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
import backgroundImage from "./assets/loginBackground.jpg";

const Login = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      email: isEmail("invalid email"),
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
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
              />

              <Space h="sm" />

              <PasswordInput
                label="Password"
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
                <Button type="submit" variant="gradient">
                  Submit
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
