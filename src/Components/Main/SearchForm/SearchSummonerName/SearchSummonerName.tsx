import React from 'react';
import { FieldAttributes, useField } from 'formik';
import {
  SummonerName,
  LabelWrapper,
  SummonerNameLabel,
  StyledSearchTextField,
  ErrorText,
} from './SearchSummonerName.styles';

const SearchSummonerName = (props: FieldAttributes<{}>) => {
  const [, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <>
      <SummonerName>
        <LabelWrapper>
          <SummonerNameLabel>Summoner name</SummonerNameLabel>
        </LabelWrapper>
        <StyledSearchTextField
          placeholder="Search for a TFT summoner..."
          autoComplete="off"
          type="text"
          {...props}
        />
        {errorText && <ErrorText>{errorText}</ErrorText>}
      </SummonerName>
    </>
  );
};

export { SearchSummonerName };
