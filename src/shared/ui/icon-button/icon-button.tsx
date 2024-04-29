import { Button } from "@mui/base";
import { styled } from "@mui/system";
import { text } from "@shared/theme/colors";

export default styled(Button)`
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
  &:focus-visible {
    outline: 1px solid ${text.disabled};
  }
`;
