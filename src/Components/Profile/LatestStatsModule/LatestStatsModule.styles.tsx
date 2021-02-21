import styled from 'styled-components';
import { PropsWithTheme } from '../../Styles/Themes/Themes';

const AverageRankContainer = styled.div`
  display: flex;
`;

const AverageRankNumberContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  background-color: ${(props: PropsWithTheme) => props.theme.colours.blue.blue};

  border-radius: 8px;
`;

const AverageRank = styled.h1`
  font-size: 32px;
  color: ${(props: PropsWithTheme) => props.theme.colours.white};
`;

const AverageRankText = styled.div`
  margin-left: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubText = styled.div`
  color: ${(props: PropsWithTheme) => props.theme.colours.grey};
`;

export {
  AverageRankContainer,
  AverageRankNumberContainer,
  AverageRank,
  AverageRankText,
  SubText,
};
