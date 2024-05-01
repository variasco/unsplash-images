import { useSetSearchState } from "@entities/image";
import { PolymorphicProps } from "@mui/base";
import { Stack, StackTypeMap } from "@mui/system";
import closeIcon from "@shared/assets/svg/close.svg";
import searchIcon from "@shared/assets/svg/search.svg";
import { Button, IconButton, Input } from "@shared/ui";
import { useState } from "react";

interface SearchImagesProps extends PolymorphicProps<StackTypeMap, "div"> {
  setSearchStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchImages(props: SearchImagesProps) {
  const { setSearchStarted, ...other } = props;

  const [state, setState] = useState("");
  const setSearch = useSetSearchState();

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const onSearchClick = () => {
    if (!state) {
      setSearchStarted(false);
      return;
    }

    setSearchStarted(true);
    setSearch(state);
  };

  const onClearClick = () => {
    setState("");
  };

  return (
    <Stack direction="row" spacing={1} p={2} {...other}>
      <Input
        startAdornment={<img src={searchIcon} alt="" />}
        endAdornment={
          <IconButton onClick={onClearClick}>
            <img src={closeIcon} alt="" />
          </IconButton>
        }
        placeholder="Телефоны, яблоки, груши..."
        value={state}
        onChange={onSearchChange}
      />
      <Button onClick={onSearchClick}>Искать</Button>
    </Stack>
  );
}
