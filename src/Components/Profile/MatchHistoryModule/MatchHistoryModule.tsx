import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { ProfileModule } from '../ProfileModule/ProfileModule';
import { ErrorLoadingModule } from '../../Styles/Common/ErrorLoadingModule/ErrorLoadingModule';

interface MatchHistoryModuleProps {
  regionalRoute: string | undefined;
  puuid: string | undefined;
  setMatchHistoryIds: React.Dispatch<
    React.SetStateAction<string[] | undefined>
  >;
}

const fetchMatchesByPuuid = async (
  region: string | undefined,
  puuid: string | undefined
) => {
  return await axios
    .get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/${region}/get-matches/by-puuid/${puuid}`,
      {
        params: {
          count: process.env.REACT_APP_PROFILE_MAX_MATCH_HISTORY_COUNT || 20,
        },
      }
    )
    .then((result) => result.data as string[])
    .catch((error) => {
      if (error.response) {
        console.error(error.response);
      }

      throw error;
    });
};

const MatchHistoryModule = ({
  regionalRoute,
  puuid,
  setMatchHistoryIds,
}: MatchHistoryModuleProps) => {
  const { isError, isLoading, isSuccess, refetch } = useQuery(
    'fetchMatchesByPuuid',
    async () => {
      return await fetchMatchesByPuuid(regionalRoute, puuid);
    },
    {
      onSuccess: (data) => {
        setMatchHistoryIds(data);
      },
      enabled: !!(regionalRoute && puuid),
    }
  );

  return (
    <>
      <ProfileModule heading="Match history">
        <ErrorLoadingModule
          isError={isError}
          isLoading={isLoading}
          refetch={refetch}
        />

        {isSuccess && (
          <div>{process.env.REACT_APP_PROFILE_MAX_MATCH_HISTORY_COUNT}</div>
        )}
      </ProfileModule>
    </>
  );
};

export { MatchHistoryModule };
