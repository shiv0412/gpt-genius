"use client";
import styled from "styled-components";

import CustomLinkButton from "@/components/shared/CustomLinkButton";

const Container = styled.div`
  height: 100vh;
  position: relative;
  background: #1c2833;
  text-align: center;
  color: #fff;

  > div {
    width: 100%;
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  p {
    color: #ecf0f1;
    width: 40%;
    display: inline-block;
    padding-bottom: 16px;
    font-size: 12px;
  }
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 4rem;
  margin: 0;
`;

export default function Home() {
  return (
    <Container>
      <div>
        <Heading>GPT Genius</Heading>
        <p>
          GPTGenius: Your AI language companion. Powered by OpenAI, it enhances
          your conversations, content creation, and more!
        </p>
        <div>
          <CustomLinkButton link={"./assistant/chat"} text={"Get started"} />
        </div>
      </div>
    </Container>
  );
}
