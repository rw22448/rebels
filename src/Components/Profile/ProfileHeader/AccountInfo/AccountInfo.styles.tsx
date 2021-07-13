import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { ThemeObject } from '../../../Styles/Themes/Themes';

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

const Badge = styled.div`
  display: inline;
  padding: 4px 8px;
  border-radius: 4px;
`;

const IconLevelContainer = styled.div``;

const SummonerLevelBadge = styled(Badge)`
  background-color: ${(object: ThemeObject) =>
    object.theme.invertedContainerColour};
  color: ${(object: ThemeObject) => object.theme.invertedContentColour};

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
    padding-top: 20px;
  }
`;

const RegionBadgeContainer = styled.div`
  margin-top: 12px;
`;

const RegionBadge = styled(Badge)`
  background-color: ${(object: ThemeObject) => object.theme.colours.blue.blue};
  color: #e0e0e0;

  font-weight: ${(object: ThemeObject) => object.theme.fontWeights.semiBold};
`;

const LastOnlineSpan = styled.span`
  @media (max-width: 420px) {
    display: none;
  }
`;

export {
  AccountInfoContainer,
  SummonerLevelBadge,
  SummonerName,
  IconLevelContainer,
  AccountDetailContainer,
  RegionBadgeContainer,
  RegionBadge,
  LastOnlineSpan,
};
