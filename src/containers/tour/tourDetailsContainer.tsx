"use client";
import styled from "styled-components";

import CustomLinkButton from "@/components/shared/CustomLinkButton";
import Image from "next/image";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
// import { generateTourImage } from "@/utils/actions";
import { useEffect } from "react";

const Container = styled.div`
  padding: 50px 32px 8px 32px;
  font-size: 14px;
  width: 525px;
  h1 {
    padding-top: 8px;
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

  img {
    display: block;
    padding-top: 32px;
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
];

const TourDetailsContainer = () => {
  //   const {
  //     mutate: handleGenerateTourImage,
  //     isPending,
  //     data: tourImageURLDetails,
  //   } = useMutation({
  //     mutationFn: (query: any) => generateTourImage(query.city, query.country),
  //     onSuccess: (data) => {
  //       if (!data) {
  //         toast.error("Something went wrong...");
  //         return;
  //       }
  //     },
  //     onError: (error) => {
  //       toast.error("Something went wrong...");
  //     },
  //   });

  useEffect(() => {
    // handleGenerateTourImage({ city: "Delhi", country: "India" });
  }, []);

  return (
    <Container>
      <CustomLinkButton link={"/assistant/tour"} text={"Back to tour"} />
      {/* content section */}
      <Image
        src={
          "data:image/jpeg;base64,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"
        }
        width={250}
        height={150}
        alt="image"
      />
      <h1>Some heading here</h1>
      <p>some paragraph here</p>
      <ul>
        {tours.map((stop: any, index: number) => {
          return <li key={index}>{stop.tourCity}</li>;
        })}
      </ul>
    </Container>
  );
};

export default TourDetailsContainer;
