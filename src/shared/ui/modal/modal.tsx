import { Modal as BaseModal, ModalOwnProps } from "@mui/base/Modal";
import { styled } from "@mui/system";
import { forwardRef } from "react";

type ModalProps = React.PropsWithChildren<{
  open: boolean;
  onClose: ModalOwnProps["onClose"];
}>;

export default function Modal(props: ModalProps) {
  const { children, open, onClose } = props;

  return (
    <StyledModal
      open={open}
      onClose={onClose}
      slots={{ backdrop: StyledBackdrop }}
    >
      <ModalContent>{children}</ModalContent>
    </StyledModal>
  );
}

const Backdrop = forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;

  return (
    <div
      className={`${open ? "base-Backdrop-open" : ""} ${className}`.trim()}
      ref={ref}
      {...other}
    />
  );
});

const StyledModal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled("div")`
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 10px 10px 0 0;
  max-width: 600px;
  width: 100%;
  max-height: calc(100% - 10px);
`;
