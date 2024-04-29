import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import { Loader } from "@shared/ui";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import fetchImages from "../../api/fetch-images";
import { useSearchState } from "../../model/contexts/image-query-state.context";
import ImageListItem from "../list-item/image-list-item";

export default function ImageList() {
  const search = useSearchState();

  const { ref, inView } = useInView();

  const { data, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["images", search],
      queryFn: ({ pageParam }) => fetchImages(search, pageParam),
      initialPageParam: 1,
      getNextPageParam: (response, _, lastPage) =>
        lastPage >= response.total_pages ? undefined : lastPage + 1,
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box p={2}>
      <Grid container spacing={1}>
        {data?.pages.flatMap((page) =>
          page.results.map((image) => (
            <Grid xs={4} key={image.id}>
              <ImageListItem image={image} />
            </Grid>
          ))
        )}
      </Grid>
      {isFetchingNextPage && <Loader />}
      {!isFetchingNextPage && <Box ref={ref} p={"2px"}></Box>}
    </Box>
  );
}
