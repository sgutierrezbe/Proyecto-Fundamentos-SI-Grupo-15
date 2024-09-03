import { Loader } from "@mantine/core";

const LoadingScreen = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <Loader style={{ marginInline: "auto" }} size="xl" />
    </div>
  );
};

export default LoadingScreen;
