import styled from 'styled-components';
import { PropsWithTheme } from '../../../Styles/Themes/Themes';

const AltText = styled.span`
  font-weight: ${(props: PropsWithTheme) => props.theme.fontWeight.semiBold};
  color: ${(props: PropsWithTheme) => props.theme.nav.contentColour};
`;

export { AltText };
