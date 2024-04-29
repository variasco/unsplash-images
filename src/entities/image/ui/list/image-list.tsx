import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import { Loader } from "@shared/ui";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import fetchImages from "../../api/fetch-images";
import { useSearchState } from "../../model/contexts/image-query-state.context";
import ImageListItem from "../list-item/image-list-item";
import { ViewImageProps } from "@features/view-image";
import { text } from "@shared/theme/colors";

type ImageListProps = {
  ViewImageFeature: React.FC<ViewImageProps>;
};

export default function ImageList(props: ImageListProps) {
  const { ViewImageFeature } = props;

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

  if (!data?.pages[0].total) {
    return (
      <Box
        p={2}
        component="p"
        sx={{
          fontFamily: '"SF Pro Display", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.2,
          color: text.grey,
          textWrap: "nowrap",
        }}
      >
        К сожалению, поиск не дал результатов
      </Box>
    );
  }

  return (
    <Box p={2}>
      <Grid container spacing={1}>
        {data?.pages.flatMap((page) =>
          page.results.map((image) => (
            <Grid xs={4} key={image.id}>
              <ImageListItem
                image={image}
                ViewImageFeature={ViewImageFeature}
              />
            </Grid>
          ))
        )}
      </Grid>
      {isFetchingNextPage && <Loader />}
      {!isFetchingNextPage && <Box ref={ref} p={"2px"}></Box>}
    </Box>
  );
}
