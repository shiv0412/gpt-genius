"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { connect } from "react-redux";

import CustomLinkButton from "@/components/shared/CustomLinkButton";
import { ITour } from "@/modals";
import { generateTourImage } from "@/utils/actions";

interface ITourDetailsContainer {
  details: any;
  tourCity: string;
}

const Container = styled.div`
  padding: 40px 32px 8px 32px;
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

const IsFetchingWrapper = styled.div`
  padding: 32px 0;
`;

const TourDetailsContainer = ({ details, tourCity }: ITourDetailsContainer) => {
  const tourDetails = details.userToursDetails?.filter((tour: any) => {
    return tour.CITY.toLowerCase() === tourCity.toLowerCase();
  })[0];
  const [tourImage, setTourImage] = useState<any>();
  const { mutate: fetchTourImage, isPending } = useMutation({
    mutationFn: (query: ITour) => generateTourImage(query.city, query.country),
    onSuccess: (data) => {
      if (data) {
        setTourImage(data);
        return;
      } else {
        toast.error("Something went wrong...");
        return;
      }
    },
    onError: (error) => {
      toast.error("Something went wrong...");
    },
  });

  useEffect(() => {
    fetchTourImage({ city: tourDetails.CITY, country: tourDetails.COUNTRY });
  }, []);

  return (
    <Container>
      <CustomLinkButton link={"/assistant/tour"} text={"Back to tour"} />
      {/* content section */}
      {isPending ? (
        <IsFetchingWrapper>Fetching tour canvas...</IsFetchingWrapper>
      ) : (
        <Image
          loader={() => tourImage}
          src={tourImage}
          width={250}
          height={150}
          alt="image"
        />
      )}
      <h1>{tourDetails.TITLE}</h1>
      <p>{tourDetails.DESCRIPTION}</p>
      <ul>
        {tourDetails.STOPS.split(",").map((stop: any, index: number) => {
          return <li key={index}>{stop}</li>;
        })}
      </ul>
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return {
    details: state.tourDetails,
  };
};

export default connect(mapStateToProps)(TourDetailsContainer);
