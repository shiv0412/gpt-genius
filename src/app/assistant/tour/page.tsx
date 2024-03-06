import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TourContainer from "@/containers/tour/tourContainer";

export default async function NewTourPage() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TourContainer />
    </HydrationBoundary>
  );
}
