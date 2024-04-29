import {
  ImageList,
  ImageQueryProvider,
  ImageStateProvider,
} from "@entities/image";
import { SearchImages } from "@features/search-images";
import { Stack } from "@mui/system";
import { useState } from "react";
import "./styles/global.css";

function App() {
  const [searchStarted, setSearchStarted] = useState(false);

  return (
    <ImageQueryProvider>
      <ImageStateProvider>
        <Stack height="100vh" sx={{ overflowX: "hidden" }}>
          <SearchImages
            sx={{ paddingTop: searchStarted ? undefined : "232px" }}
            setSearchStarted={setSearchStarted}
          />
          {searchStarted && <ImageList />}
        </Stack>
      </ImageStateProvider>
    </ImageQueryProvider>
  );
}

export default App;
