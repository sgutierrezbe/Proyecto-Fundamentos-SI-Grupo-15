import {
  TextInput,
  Autocomplete,
  NumberInput,
  Divider,
  Title,
  Button,
  Flex,
  Slider,
  Text,
} from "@mantine/core";
import { useLoaderData, useNavigate } from "react-router-dom";

const marks = [
  { value: 2, label: "2" },
  { value: 6, label: "6" },
  { value: 10, label: "10" },
  { value: 14, label: "14" },
  { value: 18, label: "18" },
  { value: 22, label: "22" },
  { value: 26, label: "26" },
];

function InventoryFilters() {
  const navigation = useNavigate();
  const { params } = useLoaderData();
  const { fabricante, marca, modelo, memoria } = params;
  return (
    <form
      style={{ display: "flex", flexDirection: "column", height: "100dvh" }}
    >
      <Title order={2}>Filters</Title>
      <Divider mb="sm" />
      <TextInput name="modelo" label="Search" mb="sm" defaultValue={modelo} />
      <Autocomplete
        name="fabricante"
        label="Manufacturer"
        mb="sm"
        defaultValue={fabricante}
      />
      <Autocomplete name="marca" label="Brand" mb="sm" defaultValue={marca} />
      <Text size="md" mb="xs">
        Max vram
      </Text>
      <Slider
        name="memoria"
        defaultValue={memoria}
        min={2}
        max={26}
        step={2}
        marks={marks}
        size="0.6rem"
      />
      <Button
        variant="gradient"
        fullWidth
        style={{ marginTop: "auto" }}
        type="submit"
      >
        Search
      </Button>
      <Button
        variant="subtle"
        fullWidth
        style={{ marginTop: "0.5rem" }}
        onClick={() => navigation("/inventory")}
      >
        Clear Filters
      </Button>
    </form>
  );
}

export default InventoryFilters;
