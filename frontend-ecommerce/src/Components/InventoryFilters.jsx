import {
  TextInput,
  Autocomplete,
  NumberInput,
  Divider,
  Title,
  Button,
  Flex,
} from "@mantine/core";

function InventoryFilters() {
  return (
    <Flex direction={"column"} style={{ height: "100dvh" }}>
      <Title order={2}>Filters</Title>
      <Divider mb="sm" />
      <TextInput label="Search" mb="sm" />
      <Autocomplete label="Manufacturer" mb="sm" />
      <Autocomplete label="Brand" mb="sm" />
      <NumberInput
        label="Vram"
        mb="sm"
        allowDecimal={false}
        allowNegative={false}
      />
      <Button
        variant="gradient"
        fullWidth
        style={{ marginTop: "auto" }}
        type="submit"
      >
        Search
      </Button>
    </Flex>
  );
}

export default InventoryFilters;
