import { Paper, Divider, Image, Box, Title, List } from "@mantine/core";
import placeholderImage from "../assets/graphic-card.png";

const InventoryProductModal = ({
  isSmallScreen,
  id,
  modelo,
  fabricante,
  marca,
  memoria,
  stock,
}) => {
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
                paddingTop: "0.7rem",
                paddingBottom: "0.7rem",
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
          {modelo}
        </Title>
        <Divider />
        <List
          style={
            isSmallScreen
              ? { height: "fit-content", paddingTop: "1rem" }
              : { marginLeft: "5px" }
          }
        >
          <List.Item>Vram: {memoria}</List.Item>
          <List.Item>Brand: {marca}</List.Item>
          <List.Item>Manufacturer: {fabricante}</List.Item>
          <List.Item>changed stock: {stock}</List.Item>
        </List>
      </Box>
    </Paper>
  );
};

export default InventoryProductModal;
