import React from 'react';
import {
  SearchDescription,
  SearchHeader,
  StyledForm,
} from './SearchForm.styles';

const SearchForm = () => {
  return (
    <>
      <SearchHeader>Search</SearchHeader>
      <SearchDescription>
        Search now to find detailed information about any TFT summoner in the
        world.
      </SearchDescription>
      <StyledForm></StyledForm>
    </>
  );
};

export { SearchForm };
