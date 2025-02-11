import React from "react";
import styled, { keyframes } from "styled-components";

const SkeletonLoader = () => {
  return (
    <SkeletonContainer>
      <SkeletonProfile>
        <SkeletonAvatar />
        <SkeletonText width="60%" />
        <SkeletonText width="40%" />
      </SkeletonProfile>
      <SkeletonList>
        {Array(3).fill().map((_, index) => (
          <SkeletonItem key={index}>
            <SkeletonImage />
            <SkeletonText width="80%" />
            <SkeletonText width="60%" />
          </SkeletonItem>
        ))}
      </SkeletonList>
    </SkeletonContainer>
  );
};

export default SkeletonLoader;

// ✅ Styled-components (Skeleton UI)
const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const SkeletonContainer = styled.div`
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

const SkeletonProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SkeletonAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(90deg, #ececec 25%, #f3f3f3 50%, #ececec 75%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

const SkeletonText = styled.div`
  height: 12px;
  background: linear-gradient(90deg, #ececec 25%, #f3f3f3 50%, #ececec 75%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
  width: ${(props) => props.width || "100%"};
`;

const SkeletonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkeletonItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  background: linear-gradient(90deg, #ececec 25%, #f3f3f3 50%, #ececec 75%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;
