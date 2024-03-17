import "@mantine/core/styles.css";
import "./App.css";
import { MantineProvider, BackgroundImage } from "@mantine/core";
import { theme } from "./theme";
import Login from "./Login.jsx";
import backgroundImage from "./assets/loginBackground.jpg";

const App = () => (
  <MantineProvider theme={theme} defaultColorScheme="dark">
    <BackgroundImage src={backgroundImage}>
      <Login />
    </BackgroundImage>
  </MantineProvider>
);
export default App;
