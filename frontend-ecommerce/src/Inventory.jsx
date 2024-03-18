import { AppShell, Burger, Pagination, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Inventory = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
      <AppShell.Footer>
        <Pagination withEdges total={10} color="red.9" />
      </AppShell.Footer>
    </AppShell>
  );
};

export default Inventory;
