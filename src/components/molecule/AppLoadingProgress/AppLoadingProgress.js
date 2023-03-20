import { Box, CircularProgress } from "../..";

export function AppLoadingProgress() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}
