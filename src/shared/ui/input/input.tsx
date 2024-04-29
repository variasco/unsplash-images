import { Input as BaseInput, InputProps, inputClasses } from "@mui/base/Input";
import { styled } from "@mui/system";
import { background, text } from "@shared/theme/colors";
import { forwardRef } from "react";

const Input = forwardRef(function (
  props: InputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { slots, startAdornment, endAdornment, ...other } = props;

  return (
    <BaseInput
      startAdornment={
        <InputAdornment sx={{ ml: 0 }}>{startAdornment}</InputAdornment>
      }
      endAdornment={
        <InputAdornment sx={{ mr: 0 }}>{endAdornment}</InputAdornment>
      }
      slots={{ root: StyledInputRoot, input: StyledInput, ...slots }}
      {...other}
      ref={ref}
    />
  );
});

export default Input;

const StyledInputRoot = styled("div")`
  font-family: "SF Pro", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  color: ${text.main};

  display: flex;
  background-color: ${background.grey};
  border-radius: 12px;
  padding: 0 8px;
  flex: 1;

  &:hover {
    outline: 1px solid ${text.disabled};
  }

  &.${inputClasses.focused} {
    outline: 1px solid ${text.disabled};
  }
`;

const StyledInput = styled("input")`
  background-color: ${background.grey};
  padding: 14px 0;
  border: none;
  width: -webkit-fill-available;

  &::placeholder {
    color: ${text.disabled};
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:focus-visible {
    outline: none;
  }
`;

const InputAdornment = styled("div")`
  margin: 0 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
