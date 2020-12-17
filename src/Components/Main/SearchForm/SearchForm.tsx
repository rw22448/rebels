import React from 'react';
import { Field, Formik } from 'formik';
import {
  SearchDescription,
  SearchFormContainer,
  SearchHeader,
  StyledForm,
} from './SearchForm.styles';
import { SearchRegionDropdown } from './SearchRegionDropdown/SearchRegionDropdown';
import { SearchSummonerName } from './SearchSummonerName/SearchSummonerName';

const validateRebelsSummonerName = (value: string) =>
  !value ? 'Summoner name is a required field.' : '';

const SearchForm = () => {
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

              <button type="submit">Submit</button>
            </StyledForm>
          )}
        </Formik>
      </SearchFormContainer>
    </>
  );
};

export { SearchForm };
