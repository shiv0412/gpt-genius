"use client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

import Button from "@/components/shared/Button";
import InputField from "@/components/shared/InputField";
import { ITour } from "@/modals";
import { generateTourResponse } from "@/utils/actions";

const Container = styled.div`
  padding: 32px;
  font-size: 14px;
  width: 525px;

  input:nth-child(odd) {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  input:nth-child(even) {
    border-right: none;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  button {
    margin-left: 16px;
  }

  h1 {
    padding-top: 16px;
    color: #2c3e50;
  }

  p {
    color: #566573;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    padding: 16px 8px;
    background: #fff;
    margin: 16px 0;
    border-radius: 5px;
    color: #566573;
  }
`;

const Heading = styled.p`
  padding: 0 0 8px 0;
  margin: 0;
  color: #566573;
`;

const NewTourContainer = () => {
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const {
    mutate: handleGenerateTour,
    isPending,
    data: tourDetails,
  } = useMutation({
    mutationFn: (query: ITour) =>
      generateTourResponse(query.city, query.country),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Something went wrong...");
        return;
      }
    },
    onError: (error) => {
      toast.error("Something went wrong...");
    },
  });

  const handleSubmit = () => {
    const query: ITour = { city, country };
    handleGenerateTour(query);
  };

  return (
    <Container>
      <Heading>Select your dream destination</Heading>
      <InputField placeholder="city" value={city} onChange={setCity} />
      <InputField placeholder="country" value={country} onChange={setCountry} />
      <Button
        title={"Generate tour"}
        disabledText={"Please wait"}
        disabled={isPending}
        handleClick={() => handleSubmit()}
      />
      {/* content section */}
      <h1>{tourDetails?.tour.title}</h1>
      <p>{tourDetails?.tour.description}</p>
      <ul>
        {tourDetails?.tour.stops.map((stop: string, index: number) => {
          return <li key={index}>{stop}</li>;
        })}
      </ul>
    </Container>
  );
};

export default NewTourContainer;
