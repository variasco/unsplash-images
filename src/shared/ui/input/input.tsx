import { Input as BaseInput, InputProps } from "@mui/base/Input";
import { styled } from "@mui/system";
import { background, text } from "@shared/theme/colors";
import { forwardRef } from "react";

const Input = forwardRef(function CustomInput(
  props: InputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

export default Input;

const InputElement = styled("input")`
  font-family: "SF Pro", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  color: ${text.main};

  padding: 14px 8px;
  width: -webkit-fill-available;
  background-color: ${background.grey};
  border-radius: 12px;
  border: none;

  &:hover {
    outline: 1px solid ${text.disabled};
  }

  &::placeholder {
    color: ${text.disabled};
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:focus-visible {
    outline: 1px solid ${text.disabled};
  }
`;
