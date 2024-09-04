import {
  AppShell,
  Burger,
  Pagination,
  ThemeIcon,
  Button,
  Title,
  Flex,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "./Inventory.css";
import IconInventory from "../Components/SvgComponent.jsx";
import InventoryProduct from "../Components/InventoryProduct.jsx";
import InventoryFilters from "../Components/InventoryFilters.jsx";
import { useMediaQuery } from "@mantine/hooks";
import { productsFetch } from "../utils/index.js";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import LoadingScreen from "../Components/LoadingScreen.jsx";
import { useChangedItems } from "../stores/index.js";
import InventoryProductModal from "../Components/InventoryProductModal.jsx";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const url = "products";

export const loader =
  () =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const response = await productsFetch(url, { params });
    const products = response.data.data;
    const pagination = response.data.pagination;
    return { products, pagination, params };
  };

const Inventory = () => {
  const [openedBurger, { toggle }] = useDisclosure();
  const [opened, { open, close }] = useDisclosure(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isLoading = navigation.state === "loading";
  const { changedItems, clearItems, getItemsFromLocalStorage } =
    useChangedItems();
  const { products, pagination } = useLoaderData();
  const { search, pathname } = useLocation();

  useEffect(() => {
    getItemsFromLocalStorage();
  }, []);

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams}`);
  };

  const handleReload = () => {
    const searchParams = new URLSearchParams(search);
    navigate(`${pathname}?${searchParams}`);
  };

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "md",
        collapsed: { mobile: !openedBurger },
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
        <div style={{ marginLeft: "auto", marginRight: "10px" }}>
          <Modal
            opened={opened}
            onClose={close}
            title={`Changed Items: ${changedItems.length}`}
            centered
            overlayProps={{
              backgroundOpacity: 0.55,
              blur: 3,
            }}
          >
            {
              <Flex direction={"column"} gap={"sm"}>
                {changedItems.map((gpu) => {
                  return (
                    <InventoryProductModal
                      key={gpu.id}
                      {...gpu}
                      isSmallScreen={isSmallScreen}
                    />
                  );
                })}
              </Flex>
            }
          </Modal>

          <Button
            disabled={changedItems.length === 0 || isSubmitting}
            variant="subtle"
            onClick={open}
          >
            See changes
          </Button>
        </div>
        <Button
          disabled={changedItems.length === 0 || isSubmitting}
          variant="light"
          type="button"
          style={{ marginRight: "10px" }}
          onClick={() => {
            clearItems();
            handleReload();
          }}
        >
          Clear
        </Button>
        <Button
          disabled={changedItems.length === 0 || isSubmitting}
          type="button"
          style={{ marginRight: "10px" }}
          variant="gradient"
          onClick={async () => {
            setIsSubmitting(true);
            try {
              const response = await productsFetch.post(
                "/changeStock",
                changedItems
              );
              clearItems();
              toast.success("items updated successfully");
              setIsSubmitting(false);
              return handleReload();
            } catch (error) {
              console.log(error);
              toast.error("something went wrong");
              setIsSubmitting(false);
              return null;
            }
          }}
        >
          {isSubmitting ? "saving..." : "save"}
        </Button>
      </AppShell.Header>

      <AppShell.Navbar style={{ backgroundColor: "#191919" }} p="md">
        <InventoryFilters />
      </AppShell.Navbar>

      <AppShell.Main style={{ backgroundColor: "#131314" }}>
        <Flex direction={"column"} style={{ marginBottom: "2rem" }} gap={"sm"}>
          {products.length !== 0 ? (
            products.map((gpu) => {
              return (
                <InventoryProduct
                  key={gpu.id}
                  {...gpu}
                  isSmallScreen={isSmallScreen}
                />
              );
            })
          ) : (
            <h1>
              Items do not exist with your filters :C... try changing them!
            </h1>
          )}
        </Flex>
      </AppShell.Main>

      <AppShell.Footer>
        <Pagination
          className="pagination"
          withEdges
          value={pagination.current_page}
          onChange={(e) => handlePageChange(e.toString())}
          total={pagination.total_pages}
          color="red.9"
        />
      </AppShell.Footer>
    </AppShell>
  );
};

export default Inventory;
