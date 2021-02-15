import React from 'react';
import { UseQueryResult } from 'react-query';
import { ProfileModule } from '../ProfileModule/ProfileModule';
import { ErrorLoadingModule } from '../../Styles/Common/ErrorLoadingModule/ErrorLoadingModule';

interface MatchHistoryModuleProps {
  matchesIsError: boolean;
  matchesIsLoading: boolean;
  matchesIsSuccess: boolean;
  matchesRefetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<UseQueryResult>;
}

const MatchHistoryModule = ({
  matchesIsError,
  matchesIsLoading,
  matchesIsSuccess,
  matchesRefetch,
}: MatchHistoryModuleProps) => {
  return (
    <>
      <ProfileModule heading="Match history">
        <ErrorLoadingModule
          isError={matchesIsError}
          isLoading={matchesIsLoading}
          refetch={matchesRefetch}
        />

        {matchesIsSuccess && (
          <div>{process.env.REACT_APP_PROFILE_MAX_MATCH_HISTORY_COUNT}</div>
        )}
      </ProfileModule>
    </>
  );
};

export { MatchHistoryModule };
