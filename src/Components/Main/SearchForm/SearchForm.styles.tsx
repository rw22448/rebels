import styled from 'styled-components';
import { Form } from 'formik';
import { down } from 'styled-breakpoints';
import { StyledButton } from '../../Styles/CommonStyles';

const SearchFormContainer = styled.div`
  margin: 0px auto;
  padding: 40px;

  width: 918px;

  ${down('lg')} {
    width: 1010px;
  }
`;

const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 250px auto 160px;
  gap: 24px 12px;
`;

const SearchHeader = styled.h1`
  font-size: 80px;
`;

const SearchDescription = styled.p`
  font-size: 16px;
`;

const SubmitButton = styled(StyledButton).attrs(() => ({
  type: 'submit',
}))`
  position: relative;
  top: 39px;
`;

export {
  SearchFormContainer,
  StyledForm,
  SearchHeader,
  SearchDescription,
  SubmitButton,
};
