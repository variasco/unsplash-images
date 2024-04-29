import { Box, Stack } from "@mui/system";
import { BaseImage, IconButton, Modal } from "@shared/ui";
import { useState } from "react";
import closeIcon from "@shared/assets/svg/close.svg";
import { Image } from "@entities/image";

export type ViewImageProps = React.PropsWithChildren<{
  image: Image;
}>;

export default function ViewImage(props: ViewImageProps) {
  const { children, image } = props;

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Box onClick={onOpen}>{children}</Box>
      <Modal open={isOpen} onClose={onClose}>
        <Stack>
          <Stack direction="row" sx={{ justifyContent: "end", px: 1, py: 1 }}>
            <IconButton sx={{ p: 1 }} onClick={onClose}>
              <img src={closeIcon} alt="close" />
            </IconButton>
          </Stack>
          <Box sx={{ aspectRatio: 1, maxHeight: "calc(100vh - 10px - 49px);" }}>
            <BaseImage
              src={image.urls.full}
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
        </Stack>
      </Modal>
    </>
  );
}
