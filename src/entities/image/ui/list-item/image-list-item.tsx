import { Box } from "@mui/system";
import { border } from "@shared/theme/colors";
import { BaseImage } from "@shared/ui";
import { Image } from "../../model/types/image-api.types";

type ImageListItemProps = {
  image: Image;
};

export default function ImageListItem(props: ImageListItemProps) {
  const { image } = props;

  return (
    <Box
      sx={{
        aspectRatio: 1,
        border: `1px solid ${border.main}`,
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <BaseImage
        src={image.urls.small}
        alt={image.description}
        sx={{
          display: "block",
          objectFit: "cover",
          width: "100%",
          height: "100%",
          objectPosition: "center",
        }}
      />
    </Box>
  );
}
