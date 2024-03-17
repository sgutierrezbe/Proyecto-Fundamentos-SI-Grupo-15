import "@mantine/core/styles.css";
import { MantineProvider, Button, Title } from "@mantine/core";
import { theme } from "./theme";

const App = () => (
  <MantineProvider theme={theme}>
    <Title>xd</Title>
    <Button fullWidth color="red.6">
      wow
    </Button>
  </MantineProvider>
);
export default App;
