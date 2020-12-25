import React from 'react';
import { AlertCircle } from 'react-feather';
import {
  Description,
  ErrorContainer,
  RetryButton,
  Subtitle,
} from './Error.styles';

const Error = () => {
  return (
    <>
      <ErrorContainer>
        <AlertCircle size={48} color="#DE1A1A" />
        <h1>Error</h1>
        <Subtitle>Failed to fetch data for this page</Subtitle>
        <Description>
          There is likely a network error or invalid entry of data.
        </Description>
        <RetryButton
          onClick={() => {
            window.location.reload();
          }}
        >
          Retry
        </RetryButton>
      </ErrorContainer>
    </>
  );
};

export { Error };
