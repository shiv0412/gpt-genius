import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ChatContainer from "@/containers/chat/chatContainer";

export default async function ChatPage() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ChatContainer />
    </HydrationBoundary>
  );
}
