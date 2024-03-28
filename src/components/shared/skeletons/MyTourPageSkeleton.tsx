import styled from "styled-components";
import SkeletonElement from "./SkeletonElement";

const SkeletonWrapper = styled.div`
  width: 150px;
  margin: 8px 16px 8px 0;
  display: inline-block;

  span {
    height: 45px;
  }
`;

const MyTourPageSkeleton = () => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
    return (
      <SkeletonWrapper key={item}>
        <SkeletonElement />
      </SkeletonWrapper>
    );
  });
};

export default MyTourPageSkeleton;
