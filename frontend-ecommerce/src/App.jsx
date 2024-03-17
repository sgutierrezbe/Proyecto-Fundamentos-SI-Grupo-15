import "@mantine/core/styles.css";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Login from "./Login.jsx";

const App = () => (
  <MantineProvider theme={theme} defaultColorScheme="dark">
    <Login />
  </MantineProvider>
);
export default App;
