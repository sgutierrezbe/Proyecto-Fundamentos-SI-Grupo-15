import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Login from "./Pages/Login.jsx";
import Inventory from "./Pages/Inventory.jsx";
import NotFound from "./Pages/NotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { loader as inventoryLoader } from "./Pages/Inventory.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/inventory",
    element: <Inventory />,
    errorElement: <NotFound />,
    loader: inventoryLoader(),
  },
]);

const App = () => (
  <MantineProvider theme={theme} defaultColorScheme="dark">
    <RouterProvider router={router} />
  </MantineProvider>
);
export default App;
