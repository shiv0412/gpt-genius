import styled from "styled-components";
import SkeletonElement from "./SkeletonElement";

const TitleWrapper = styled.div`
  padding-top: 32px;

  span {
    height: 40px;
  }
`;

const DescriptionWrapper = styled.div`
  padding: 16px 0;

  span {
    margin: 8px 0;
  }
`;

const StopWrapper = styled.div`
  padding: 0 0 16px 0;

  span {
    margin: 8px 0;
    padding: 20px 0;
  }
`;

const TourSkeleton = () => {
  return (
    <>
      <TitleWrapper>
        <SkeletonElement />
      </TitleWrapper>
      <DescriptionWrapper>
        <SkeletonElement />
        <SkeletonElement />
      </DescriptionWrapper>
      <StopWrapper>
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
      </StopWrapper>
    </>
  );
};

export default TourSkeleton;
