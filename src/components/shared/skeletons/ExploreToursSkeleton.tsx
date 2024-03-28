import styled from "styled-components";
import SkeletonElement from "./SkeletonElement";

const TitleWrapper = styled.div`
  padding-top: 32px;

  span {
    height: 40px;
    margin-bottom: 8px;
  }
`;

const DescriptionWrapper = styled.div`
  padding: 0;

  span {
    padding: 32px 0;
  }
`;

const Container = styled.div``;

const MainWrapper = styled.div`
  padding-top: 32px;
`;

const ExploreToursSkeleton = () => {
  return (
    <MainWrapper>
      <Container>
        <TitleWrapper>
          <SkeletonElement />
        </TitleWrapper>
        <DescriptionWrapper>
          <SkeletonElement />
        </DescriptionWrapper>
      </Container>
      <Container>
        <TitleWrapper>
          <SkeletonElement />
        </TitleWrapper>
        <DescriptionWrapper>
          <SkeletonElement />
        </DescriptionWrapper>
      </Container>
      <Container>
        <TitleWrapper>
          <SkeletonElement />
        </TitleWrapper>
        <DescriptionWrapper>
          <SkeletonElement />
        </DescriptionWrapper>
      </Container>
    </MainWrapper>
  );
};

export default ExploreToursSkeleton;
