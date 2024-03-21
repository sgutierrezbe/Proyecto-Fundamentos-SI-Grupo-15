import {
  Paper,
  Divider,
  Image,
  Box,
  Title,
  List,
  NumberInput,
} from "@mantine/core";
import placeholderImage from "./assets/graphic-card.png";

function InventoryProduct() {
  return (
    <Paper
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        height: "110px",
      }}
    >
      <Image
        src={null}
        fallbackSrc={placeholderImage}
        radius="md"
        h="100%"
        w="20vw"
        fit="contain"
        style={{
          backgroundColor: "#ffffff",
          paddingInline: "5px",
          marginInlineEnd: "5px",
        }}
      />
      <Divider orientation="vertical" size="sm" />
      <Box h="100%">
        <Title order={3} style={{ marginInline: "5px" }}>
          GeForce GTX 1050 Mobile 3GB
        </Title>
        <Divider />
        <List style={{ marginInline: "5px" }}>
          <List.Item>Vram: 4</List.Item>
          <List.Item>Brand: Nvidia</List.Item>
          <List.Item>Manufacterer: Nvidida</List.Item>
        </List>
      </Box>
      <Box className="clear-btn">
        <NumberInput
          value={1}
          clampBehavior="strict"
          allowDecimal={false}
          allowNegative={false}
        />
      </Box>
    </Paper>
  );
}

export default InventoryProduct;
