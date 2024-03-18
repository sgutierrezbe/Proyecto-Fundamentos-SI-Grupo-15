import "@mantine/core/styles.css";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Login from "./Login.jsx";
import Inventory from "./Inventory.jsx";
import NotFound from "./NotFound.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => (
  <MantineProvider theme={theme} defaultColorScheme="dark">
    <Router>
      <Routes>
        <Route path="/" exact Component={Login} />
        <Route path="/inventory" exact Component={Inventory} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  </MantineProvider>
);
export default App;
