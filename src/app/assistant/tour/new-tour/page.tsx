import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ChatContainer from "@/containers/chat/chatContainer";
import NewTourContainer from "@/containers/tour/newTourContainer";

export default async function NewTourPage() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewTourContainer />
    </HydrationBoundary>
  );
}
