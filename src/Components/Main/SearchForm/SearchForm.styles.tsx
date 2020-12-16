import styled from 'styled-components';
import { Form } from 'formik';

const SearchFormContainer = styled.div``;

const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 250px auto;
  gap: 24px 12px;
`;

const SearchHeader = styled.h1`
  font-size: 80px;
`;

const SearchDescription = styled.p`
  font-size: 16px;
`;

export { SearchFormContainer, StyledForm, SearchHeader, SearchDescription };
