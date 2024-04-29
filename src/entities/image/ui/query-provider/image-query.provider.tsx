import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../model/contexts/query-client.context";

export default function ImageQueryProvider(props: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}
