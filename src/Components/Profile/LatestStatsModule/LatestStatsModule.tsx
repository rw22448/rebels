import React from 'react';
import { UseQueryResult } from 'react-query';
import { ErrorLoadingModule } from '../../Styles/Common/ErrorLoadingModule/ErrorLoadingModule';
import { ProfileModule } from '../ProfileModule/ProfileModule';

interface LatestStatsModuleProps {
  matchHistoryIsError: boolean;
  matchHistoryIsLoading: boolean;
  matchHistoryIsSuccess: boolean;
  matchHistoryRefetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<UseQueryResult>;
}

const LatestStatsModule = ({
  matchHistoryIsError,
  matchHistoryIsLoading,
  matchHistoryIsSuccess,
  matchHistoryRefetch,
}: LatestStatsModuleProps) => {
  return (
    <>
      <ProfileModule heading="Match history">
        <ErrorLoadingModule
          isError={matchHistoryIsError}
          isLoading={matchHistoryIsLoading}
          refetch={matchHistoryRefetch}
        />

        {matchHistoryIsSuccess && <div>Latest stats</div>}
      </ProfileModule>
    </>
  );
};

export { LatestStatsModule };
