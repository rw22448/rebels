import React from 'react';
import { StyledLoading } from './Loading.styles';

interface LoadingProps {
  size?: number;
}

const Loading = ({ size }: LoadingProps) => {
  return (
    <>
      <StyledLoading size={size || 60} />
    </>
  );
};

export { Loading };
