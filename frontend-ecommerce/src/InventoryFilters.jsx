import {
  TextInput,
  Autocomplete,
  NumberInput,
  Divider,
  Title,
  Button,
} from "@mantine/core";

function InventoryFilters() {
  return (
    <div>
      <Title order={2}>Filters</Title>
      <Divider mb="sm" />
      <TextInput label="Search" mb="sm" />
      <Autocomplete label="Manufacturer" mb="sm" />
      <Autocomplete label="Brand" mb="sm" />
      <NumberInput label="Vram" mb="sm" />
      <Button variant="gradient" fullWidth className="search-btn">
        Search
      </Button>
    </div>
  );
}

export default InventoryFilters;
