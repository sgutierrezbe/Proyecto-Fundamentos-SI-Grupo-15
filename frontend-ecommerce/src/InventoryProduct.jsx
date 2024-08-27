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

function InventoryProduct({ isSmallScreen }) {
  return (
    <Paper
      style={
        isSmallScreen
          ? {
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              maxHeight: "400px",
            }
          : { display: "flex", alignItems: "center", height: "100%" }
      }
    >
      <Image
        src={null}
        fallbackSrc={placeholderImage}
        radius="md"
        h={isSmallScreen ? "8rem" : "100%"}
        w={isSmallScreen ? "100%" : "8rem"}
        fit="contain"
        style={{
          backgroundColor: "#ffffff",
          paddingInline: "5px",
          marginInlineEnd: "5px",
        }}
      />
      {isSmallScreen ? <></> : <Divider orientation="vertical" size="sm" />}
      <Box
        style={
          isSmallScreen
            ? {
                height: "fit-content",
                width: "100%",
                padding: "0.75rem",
              }
            : {
                height: "100%",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                overflow: "hidden",
              }
        }
      >
        <Title
          order={3}
          style={
            isSmallScreen ? { height: "fit-content" } : { marginLeft: "5px" }
          }
        >
          GeForce GTX 1050 Mobile 3GB
        </Title>
        <Divider />
        <List
          style={
            isSmallScreen
              ? { height: "fit-content", paddingTop: "1rem" }
              : { marginLeft: "5px" }
          }
        >
          <List.Item>Vram: 4</List.Item>
          <List.Item>Brand: Nvidia</List.Item>
          <List.Item>Manufacturer: Nvidida</List.Item>
        </List>
      </Box>
      <Box
        style={
          isSmallScreen
            ? { height: "fit-content", width: "100%", padding: "1rem" }
            : { marginLeft: "auto", marginRight: "1rem" }
        }
      >
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
