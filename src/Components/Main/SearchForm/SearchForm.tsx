import React from 'react';
import { Formik } from 'formik';
import {
  SearchDescription,
  SearchHeader,
  StyledForm,
} from './SearchForm.styles';
import { SearchRegionDropdown } from './SearchRegionDropdown/SearchRegionDropdown';

const SearchForm = () => {
  return (
    <>
      <SearchHeader>Search</SearchHeader>
      <SearchDescription>
        Search now to find detailed information about any TFT summoner in the
        world.
      </SearchDescription>
      <Formik
        initialValues={{ rebelsSummonerRegion: 'oc1' }}
        onSubmit={() => {}}
      >
        {({ values, setFieldValue, initialValues }) => (
          <StyledForm>
            <SearchRegionDropdown
              onChangeHandler={setFieldValue}
              initialRegion={initialValues.rebelsSummonerRegion}
            />

            <pre>{JSON.stringify(values, null, 2)}</pre>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export { SearchForm };
