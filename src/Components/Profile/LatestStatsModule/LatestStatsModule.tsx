import React from 'react';
import { UseQueryResult } from 'react-query';
import { ErrorLoadingModule } from '../../Styles/Common/ErrorLoadingModule/ErrorLoadingModule';
import { ProfileModule } from '../ProfileModule/ProfileModule';
import { ProfileModuleContent } from '../ProfileModule/ProfileModule.styles';

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
      <ProfileModule heading="Latest stats">
        <ErrorLoadingModule
          isError={matchHistoryIsError}
          isLoading={matchHistoryIsLoading}
          refetch={matchHistoryRefetch}
        />

        {matchHistoryIsSuccess && (
          <ProfileModuleContent>Latest stats</ProfileModuleContent>
        )}
      </ProfileModule>
    </>
  );
};

export { LatestStatsModule };
