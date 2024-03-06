"use client";
import { useState } from "react";
import styled from "styled-components";

import Button from "@/components/shared/Button";
import InputField from "@/components/shared/InputField";
import Link from "next/link";

const Container = styled.div`
  padding: 32px;

  input {
    width: 250px;
    margin-right: 16px;
  }
`;

const TourWrapper = styled.div`
  padding-top: 32px;

  a {
    width: 150px;
    background: #fff;
    padding: 16px 8px;
    margin: 8px 16px 8px 0;
    display: inline-block;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    color: #566573;
  }
`;

const tours = [
  {
    tourCity: "Delhi",
    tourCountry: "India",
  },
  {
    tourCity: "Delhi",
    tourCountry: "India",
  },
  {
    tourCity: "Delhi",
    tourCountry: "India",
  },
  {
    tourCity: "Delhi",
    tourCountry: "India",
  },
  {
    tourCity: "Delhi",
    tourCountry: "India",
  },
  {
    tourCity: "Delhi",
    tourCountry: "India",
  },
  {
    tourCity: "Delhi",
    tourCountry: "India",
  },
];

const TourContainer = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Container>
      <InputField
        placeholder="Enter city or country"
        value={searchValue}
        onChange={setSearchValue}
      />
      <Button
        title={"Search tour"}
        disabledText={"Please wait"}
        disabled={false}
        handleClick={() => {}}
      />
      <TourWrapper>
        {tours.map((tour) => {
          return (
            <Link href={`/assistant/tour/${tour.tourCity}`}>
              {tour.tourCity + ", " + tour.tourCountry}
            </Link>
          );
        })}
      </TourWrapper>
    </Container>
  );
};

export default TourContainer;
