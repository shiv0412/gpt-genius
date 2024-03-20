"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { connect } from "react-redux";
import toast from "react-hot-toast";

import Button from "@/components/shared/Button";
import InputField from "@/components/shared/InputField";
import { IReduxStore, ITourDetailsWithUser } from "@/modals";
import { updateTours } from "@/utils/redux/actions/actions";

interface ITourContainer {
  details: IReduxStore;
  updateTours: (tours: ITourDetailsWithUser[]) => void;
}

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

const TourContainer = ({ details, updateTours }: ITourContainer) => {
  const [searchValue, setSearchValue] = useState("");
  const [tourDetails, setTourDetails] = useState<ITourDetailsWithUser[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [allTours, setAllTours] = useState<ITourDetailsWithUser[]>();

  async function fetchUsersTours() {
    setIsFetching(true);
    try {
      const response = await fetch(
        `http://localhost:8090/tours/${details.userId ? details.userId : ""}`
      );
      const data = await response.json();
      setTourDetails(data.data);
      setAllTours(data.data);
      setIsFetching(false);
      updateTours(data.data);
    } catch (error) {
      toast.error("Unable to display tours.");
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchUsersTours();
  }, [details.userId]);

  const handleSearch = () => {
    const filteredTours = allTours?.filter((tour: any) => {
      return (
        tour.CITY.toLowerCase().includes(searchValue.toLowerCase()) ||
        tour.COUNTRY.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setTourDetails(filteredTours);
  };

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
        handleClick={handleSearch}
      />
      <TourWrapper>
        {isFetching
          ? "Fetching the tours..."
          : tourDetails?.map((tour: any, index: number) => {
              return (
                <Link href={`/assistant/tour/${tour.CITY}`} key={index}>
                  {tour.CITY + ", " + tour.COUNTRY}
                </Link>
              );
            })}
      </TourWrapper>
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return {
    details: state.tourDetails,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateTours: (tours: ITourDetailsWithUser[]) => {
      dispatch(updateTours(tours));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TourContainer);
