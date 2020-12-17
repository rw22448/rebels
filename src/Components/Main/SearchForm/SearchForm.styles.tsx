import styled from 'styled-components';
import { Form } from 'formik';
import { down } from 'styled-breakpoints';
import { StyledButton } from '../../Styles/CommonStyles';

const SearchFormContainer = styled.div`
  margin: 172px auto 0px auto;
  padding: 0px 40px;

  /* 918px for content size - 17px to align with scroll bar width */
  /* Only necessary for xl due to width contraint of container changing from lg down */
  min-width: 275px;
  max-width: calc(918px - 17px);

  ${down('lg')} {
    max-width: 1010px;
  }

  ${down('md')} {
    max-width: 748px;
    margin-top: 100px;
  }

  ${down('sm')} {
    max-width: calc(100% - 80px);
  }
`;

const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 250px auto 160px;
  gap: 12px 24px;

  margin-top: 24px;

  ${down('md')} {
    grid-template-columns: auto 160px;
  }

  ${down('sm')} {
    grid-template-columns: auto;
  }
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
  max-width: 160px;
  position: relative;
  top: 39px;

  ${down('sm')} {
    top: 12px;
  }
`;

export {
  SearchFormContainer,
  StyledForm,
  SearchHeader,
  SearchDescription,
  SubmitButton,
};
