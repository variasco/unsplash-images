import { Box } from "@mui/system";
import loaderIcon from "@shared/assets/svg/loader.svg";
import BaseImage from "../base-image/base-image";

export default function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        py: 1,
      }}
    >
      <BaseImage
        src={loaderIcon}
        alt="loading"
        sx={{
          display: "block",
          animation: "1.5s linear infinite spin",
          "@keyframes spin": {
            from: {
              transform: "rotate(0deg)",
            },
            to: {
              transform: "rotate(360deg)",
            },
          },
        }}
      />
    </Box>
  );
}
