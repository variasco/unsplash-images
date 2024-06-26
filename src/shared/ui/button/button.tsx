import { PolymorphicProps } from "@mui/base";
import {
  Button as BaseButton,
  ButtonTypeMap,
  buttonClasses,
} from "@mui/base/Button";
import { MUIStyledCommonProps, Theme, styled } from "@mui/system";
import { primary, text } from "@shared/theme/colors";

type ButtonProps = PolymorphicProps<ButtonTypeMap, "button"> &
  MUIStyledCommonProps<Theme>;

export default function Button(props: ButtonProps) {
  const { children } = props;

  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled(BaseButton)`
  &.${buttonClasses.root} {
    font-family: "SF Pro Display", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    color: ${text.inverted};
    text-wrap: nowrap;

    padding: 14px 16px;
    border-radius: 12px;
    background-color: ${primary.main};
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    box-shadow: none;
  }

  &:hover {
    background-color: ${primary.light};
  }

  &.${buttonClasses.active} {
    background-color: ${primary.dark};
  }

  &.${buttonClasses.focusVisible} {
    outline: 1px solid ${text.disabled};
  }

  // &.${buttonClasses.disabled} {
  //   background-color: ${text.disabled};
  //   color: ${text.main};
  // }
`;
