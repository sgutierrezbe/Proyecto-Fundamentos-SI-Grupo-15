import {
  Paper,
  Divider,
  Image,
  Box,
  Title,
  List,
  NumberInput,
} from "@mantine/core";
import placeholderImage from "../assets/graphic-card.png";
import { useEffect, useState } from "react";
import { useChangedItems } from "../stores";

function InventoryProduct({
  isSmallScreen,
  id,
  modelo,
  fabricante,
  marca,
  memoria,
  stock,
}) {
  const { changeItem, findItem, deleteItem } = useChangedItems();
  const [itemStock, setItemStock] = useState(findItem(id)?.stock ?? stock);

  useEffect(() => {
    if (itemStock !== stock) {
      changeItem({ id, modelo, fabricante, marca, memoria, stock: itemStock });
    } else {
      console.log(deleteItem(id));
    }
  }, [itemStock]);

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
          value={itemStock}
          allowDecimal={false}
          allowNegative={false}
          onChange={(e) => {
            setItemStock(e);
          }}
        />
      </Box>
    </Paper>
  );
}

export default InventoryProduct;
