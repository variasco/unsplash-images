import { createContext, useContext } from "react";

export const ImageSearchStateContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>] | undefined
>(undefined);

export function useSearchState() {
  const searchState = useContext(ImageSearchStateContext);

  if (!searchState) {
    throw new Error(
      "hook useSearchState is used outside of ImageStateProvider"
    );
  }

  return searchState[0];
}

export function useSetSearchState() {
  const searchState = useContext(ImageSearchStateContext);

  if (!searchState) {
    throw new Error(
      "hook useSetSearchState is used outside of ImageStateProvider"
    );
  }

  return searchState[1];
}
