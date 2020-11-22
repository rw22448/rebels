import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { Theme } from '../../../Styles/Themes/Themes';

interface SummonerLevelProps {
  theme: Theme;
}

const AccountInfoContainer = styled.div`
  text-align: center;

  position: relative;
  bottom: 48px;

  ${down('sm')} {
    position: initial;

    display: flex;

    > div {
      margin: 0 !important;
    }
  }

  > div {
    margin: 0 auto;
  }
`;

const IconLevelContainer = styled.div``;

const SummonerLevel = styled.div`
  display: inline;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${(props: SummonerLevelProps) => props.theme.colour};
  color: ${(props: SummonerLevelProps) => props.theme.invertedColour};

  position: relative;
  bottom: 16px;
`;

const SummonerName = styled.h1`
  ${down('sm')} {
    font-size: 24px;
  }
`;

const AccountDetailContainer = styled.div`
  ${down('sm')} {
    text-align: left;

    padding-left: 12px;
    padding-top: 24px;
  }
`;

export {
  AccountInfoContainer,
  SummonerLevel,
  SummonerName,
  IconLevelContainer,
  AccountDetailContainer,
};
