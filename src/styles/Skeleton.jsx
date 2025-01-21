import React from 'react';
import styled, { keyframes } from 'styled-components';

const skeletonAnimation = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #cfcfcf;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkeletonItem = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '16px'};
  border-radius: 8px;
  animation: ${skeletonAnimation} 1.5s infinite ease-in-out;
`;

export const Skeleton = () => (
  <SkeletonWrapper>
    <SkeletonItem width="80%" height="24px" />
    <SkeletonItem width="90%" height="16px" />
    <SkeletonItem width="100%" height="16px" />
    <SkeletonItem width="60%" height="16px" />
  </SkeletonWrapper>
);
