"use client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { connect } from "react-redux";

import Button from "@/components/shared/Button";
import InputField from "@/components/shared/InputField";
import {
  IReduxStore,
  ITour,
  ITourDetails,
  ITourDetailsWithUser,
} from "@/modals";
import { generateTourResponse, generateTrendingTours } from "@/utils/actions";
import { saveTourDetails } from "./helpFunctions";
import TourSkeleton from "@/components/shared/skeletons/TourSkeleton";
import ExploreToursSkeleton from "@/components/shared/skeletons/ExploreToursSkeleton";

interface ITourContainer {
  details: IReduxStore | any;
}

const Container = styled.div`
  padding: 32px;
  font-size: 14px;
  width: 75%;

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

const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;

const TrendingTourContainer = styled.div`
  width: 35%;
  height: 100vh;
  padding: 0 32px 0 32px;

  h4 {
    color: #566573;
    padding-top: 32px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    margin: 16px 0;
    border-radius: 5px;
    color: #2c3e50;
    font-size: 14px;
  }

  ul li div span {
    font-size: 12px;
    color: #566573;
  }

  ul li div:nth-child(1) {
    padding: 8px;
    background: #ebdef0;
    border-radius: 5px;
  }

  ul li div:nth-child(2) {
    padding: 8px;
    background: #fff;
    border-radius: 5px;
  }

  ul li :hover {
    cursor: pointer;
  }
`;

const NewTourContainer = ({ details }: ITourContainer) => {
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [tourDetails, setTourDetails] = useState<
    ITourDetailsWithUser[] | any
  >();
  const [trendingTours, setTrendingTours] = useState<ITourDetails[]>();

  const { mutate: handleGenerateTour, isPending } = useMutation({
    mutationFn: (query: ITour) =>
      generateTourResponse(query.city, query.country),
    onSuccess: (data) => {
      if (data) {
        setTourDetails(data?.tour);
        const existingTour = details?.userToursDetails?.filter((tour: any) => {
          return (
            tour.CITY.toLowerCase() === city.toLowerCase() &&
            tour.COUNTRY.toLowerCase() === country.toLowerCase()
          );
        });
        existingTour &&
          existingTour.length === 0 &&
          saveTourDetails(tourDetails, details.userId ? details.userId : "");
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
  const { mutate: handleTrendingTours, isPending: isFetchingTrendingTours } =
    useMutation({
      mutationFn: (query: ITour) => generateTrendingTours(query.country),
      onSuccess: (data) => {
        if (data) {
          setTrendingTours(data?.tour);
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

  const handleSubmit = () => {
    const query: ITour = { city, country };
    handleTrendingTours(query);
    handleGenerateTour(query);
  };

  return (
    <MainContainer>
      <Container>
        <Heading>Select your dream destination</Heading>
        <InputField placeholder="city" value={city} onChange={setCity} />
        <InputField
          placeholder="country"
          value={country}
          onChange={setCountry}
        />
        <Button
          title={"Generate tour"}
          disabledText={"Please wait"}
          disabled={isPending}
          handleClick={() => handleSubmit()}
        />
        {/* content section */}
        {isPending ? (
          <TourSkeleton />
        ) : (
          <>
            <h1>{tourDetails?.title}</h1>
            <p>{tourDetails?.description}</p>
            <ul>
              {tourDetails?.stops.map((stop: string, index: number) => {
                return <li key={index}>{stop}</li>;
              })}
            </ul>
          </>
        )}
      </Container>
      <TrendingTourContainer>
        {isFetchingTrendingTours ? (
          <ExploreToursSkeleton />
        ) : (
          <>
            {trendingTours && (
              <h4>Explore more in {trendingTours[0]?.country}</h4>
            )}
            <ul>
              {trendingTours?.map(
                (tourDetails: ITourDetails, index: number) => {
                  return (
                    <li key={index} onClick={() => setTourDetails(tourDetails)}>
                      <div>{tourDetails.city + ", " + tourDetails.country}</div>
                      <div>
                        {tourDetails.stops.map((stop) => {
                          return <span key={stop}>{stop + ", "}</span>;
                        })}
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
          </>
        )}
      </TrendingTourContainer>
    </MainContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    details: state.tourDetails,
  };
};

export default connect(mapStateToProps)(NewTourContainer);
