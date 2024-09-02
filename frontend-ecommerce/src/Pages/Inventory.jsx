import {
  AppShell,
  Burger,
  Pagination,
  ThemeIcon,
  Button,
  Title,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "./Inventory.css";
import IconInventory from "../Components/SvgComponent.jsx";
import InventoryProduct from "../Components/InventoryProduct.jsx";
import InventoryFilters from "../Components/InventoryFilters.jsx";
import { useMediaQuery } from "@mantine/hooks";

const Inventory = () => {
  const [opened, { toggle }] = useDisclosure();
  const isSmallScreen = useMediaQuery("(max-width: 650px)");

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
        <InventoryFilters />
      </AppShell.Navbar>

      <AppShell.Main style={{ backgroundColor: "#131314" }}>
        <Flex direction={"column"} style={{ marginBottom: "2rem" }} gap={"sm"}>
          <InventoryProduct isSmallScreen={isSmallScreen} />
          <InventoryProduct isSmallScreen={isSmallScreen} />
          <InventoryProduct isSmallScreen={isSmallScreen} />
          <InventoryProduct isSmallScreen={isSmallScreen} />
          <InventoryProduct isSmallScreen={isSmallScreen} />
          <InventoryProduct isSmallScreen={isSmallScreen} />
          <InventoryProduct isSmallScreen={isSmallScreen} />
        </Flex>
      </AppShell.Main>

      <AppShell.Footer>
        <Pagination className="pagination" withEdges total={20} color="red.9" />
      </AppShell.Footer>
    </AppShell>
  );
};

export default Inventory;