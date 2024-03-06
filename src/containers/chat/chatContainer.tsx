"use client";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

import "../container.css";
import Button from "@/components/shared/Button";
import InputField from "@/components/shared/InputField";
import { generateChatResponse } from "@/utils/actions";
import TemperatureSelector from "@/components/TemperatureSelector";
import { IMessage } from "@/modals";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const InputContainer = styled.div`
  position: fixed;
  bottom: 32px;
  padding: 0px 32px 0px 32px;
  display: flex;
  width: 100%;

  input {
    width: 40%;
    margin-right: 8px;
  }
`;

const MessageContainer = styled.div`
  height: 80vh;

  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  padding: 16px 32px;

  div:nth-child(even) {
    background: #d6eaf8;
  }

  div:nth-child(odd) {
    background: #ebdef0;
  }
`;

const Message = styled.div`
  display: flex;
  margin: 8px 0;
  padding: 0 8px;
  border-radius: 5px;

  span {
    margin-top: 4px;
    font-size: 20px;
    padding-right: 8px;
  }

  p {
    font-size: 12px;
  }
`;

const Loader = styled.span`
  width: 10px;
  height: 10px;
  border: 5px solid #808b96;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderContainer = styled.div`
  padding: 0px 32px;
  position: fixed;
  bottom: 74px;
  font-size: 12px;
  color: #808b96;
`;

export default function ChatContainer() {
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [assistantTemperature, setAssistantTemperature] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: (query: IMessage) =>
      generateChatResponse([...messages, query], assistantTemperature),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Something went wrong...");
        return;
      }
      setMessages((prev: any) => [...prev, data]);
    },
    onError: (error) => {
      toast.error("Something went wrong...");
    },
  });

  const handleSubmit = () => {
    const query: IMessage = { role: "user", content: text };
    mutate(query);
    setMessages((prev: IMessage[]) => [...prev, query]);
    setText("");
  };

  useEffect(() => {
    if (messages.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages.length]);

  return (
    <Container>
      <MessageContainer>
        {messages.map((message: IMessage, index: number) => {
          const avatar = message.role == "user" ? "👤" : "🤖";
          return (
            <Message key={index}>
              <span>{avatar}</span>
              <p>{message.content}</p>
            </Message>
          );
        })}
        <div ref={ref} />
      </MessageContainer>
      {isPending && (
        <LoaderContainer>
          Typing...
          <Loader />
        </LoaderContainer>
      )}
      <InputContainer>
        <InputField value={text} placeholder={"Message"} onChange={setText} />
        <Button
          disabled={isPending}
          title={"Ask question"}
          disabledText={"Please wait"}
          handleClick={handleSubmit}
        />
        <TemperatureSelector
          temperatureValue={assistantTemperature}
          handleClick={(value) => setAssistantTemperature(value)}
        />
      </InputContainer>
    </Container>
  );
}
