import {
  AppShell,
  Burger,
  Pagination,
  ThemeIcon,
  Button,
  Image,
  Text,
  Title,
  Space,
  Box,
  SimpleGrid,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "./Inventory.css";
import IconInventory from "./SvgComponent.jsx";
import InventoryProduct from "./InventoryProduct.jsx";

const Inventory = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "md",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className="container">
        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="md" />
        <ThemeIcon variant="gradient" m="md">
          <IconInventory />
        </ThemeIcon>
        <Title order={2} visibleFrom="s">
          Hello, User
        </Title>
        <Button disabled variant="light" type="button" className="clear-btn">
          Clear
        </Button>
        <Button disabled type="button" className="save-btn" variant="gradient">
          Save
        </Button>
      </AppShell.Header>

      <AppShell.Navbar style={{ backgroundColor: "#191919" }} p="md">
        Filtros
      </AppShell.Navbar>

      <AppShell.Main style={{ backgroundColor: "#131314" }}>
        <SimpleGrid cols={1}>
          <InventoryProduct />
          <InventoryProduct />
          <InventoryProduct />
          <InventoryProduct />
          <InventoryProduct />
          <InventoryProduct />
          <InventoryProduct />
          <InventoryProduct />
          <InventoryProduct />
        </SimpleGrid>
      </AppShell.Main>

      <AppShell.Footer>
        <Pagination className="pagination" withEdges total={20} color="red.9" />
      </AppShell.Footer>
    </AppShell>
  );
};

export default Inventory;
