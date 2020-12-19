import React from 'react';
import { Field, Formik } from 'formik';
import {
  SearchDescription,
  SearchFormContainer,
  SearchHeader,
  StyledForm,
  SubmitButton,
} from './SearchForm.styles';
import { SearchRegionDropdown } from './SearchRegionDropdown/SearchRegionDropdown';
import { SearchSummonerName } from './SearchSummonerName/SearchSummonerName';
import { RouteComponentProps } from 'react-router-dom';

const validateRebelsSummonerName = (value: string) =>
  !value ? 'Summoner name is a required field.' : '';

const SearchForm = ({ history }: RouteComponentProps) => {
  return (
    <>
      <SearchFormContainer>
        <SearchHeader>Search</SearchHeader>
        <SearchDescription>
          Search now to find detailed information about any TFT summoner in the
          world.
        </SearchDescription>
        <Formik
          initialValues={{
            rebelsSummonerRegion: 'oc1',
            rebelsSummonerName: '',
          }}
          onSubmit={(values) => {
            console.log(values);

            history.push(
              `/profile/${values.rebelsSummonerRegion}/${values.rebelsSummonerName}`
            );
          }}
        >
          {({ setFieldValue, initialValues }) => (
            <StyledForm>
              <SearchRegionDropdown
                onChangeHandler={setFieldValue}
                initialRegion={initialValues.rebelsSummonerRegion}
              />

              <Field
                as={SearchSummonerName}
                name="rebelsSummonerName"
                validate={validateRebelsSummonerName}
              />

              <SubmitButton>Submit</SubmitButton>
            </StyledForm>
          )}
        </Formik>
      </SearchFormContainer>
    </>
  );
};

export { SearchForm };
