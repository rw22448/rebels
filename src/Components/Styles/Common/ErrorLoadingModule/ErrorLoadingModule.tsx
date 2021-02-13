import React from 'react';
import { UseQueryResult } from 'react-query';
import { ModuleContainer } from '../../../Profile/ProfileModule/ProfileModule.styles';
import { Loading } from '../Loading/Loading';
import { VerticalRule } from '../VerticalRule/VerticalRule';
import {
  StyledAlertCircle,
  StyledRefreshCw,
} from './ErrorLoadingModule.styles';

interface ErrorLoadingModuleProps {
  isError: boolean;
  isLoading: boolean;
  refetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<UseQueryResult>;
}

const ErrorLoadingModule = ({
  isError,
  isLoading,
  refetch,
}: ErrorLoadingModuleProps) => {
  return (
    <>
      {isError && (
        <ModuleContainer>
          <StyledAlertCircle />
          <VerticalRule height={24} padding={16} />
          <StyledRefreshCw
            onClick={() => {
              refetch();
            }}
          />
        </ModuleContainer>
      )}

      {isLoading && (
        <div>
          <ModuleContainer>
            <Loading size={20} />
          </ModuleContainer>
        </div>
      )}
    </>
  );
};

export { ErrorLoadingModule };
