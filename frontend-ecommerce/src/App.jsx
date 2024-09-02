import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Login from "./Pages/Login.jsx";
import Inventory from "./Pages/Inventory.jsx";
import NotFound from "./Pages/NotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  },
]);

const App = () => (
  <MantineProvider theme={theme} defaultColorScheme="dark">
    {/*<Router>
      <Routes>
        <Route path="/" exact Component={Login} />
        <Route path="/inventory" exact Component={Inventory} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router> */}
    <RouterProvider router={router} />
  </MantineProvider>
);
export default App;
