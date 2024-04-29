import { useState } from "react";
import { ImageSearchStateContext } from "../../model/contexts/image-query-state.context";

export default function ImageStateProvider(props: React.PropsWithChildren) {
  const searchState = useState<string>("");

  return (
    <ImageSearchStateContext.Provider value={searchState}>
      {props.children}
    </ImageSearchStateContext.Provider>
  );
}
