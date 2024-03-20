import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TourDetailsContainer from "@/containers/tour/tourDetailsContainer";

export default async function NewTourPage(params: any) {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TourDetailsContainer tourCity={params.params.id} />
    </HydrationBoundary>
  );
}
