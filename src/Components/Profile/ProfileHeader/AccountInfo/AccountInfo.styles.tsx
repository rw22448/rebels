import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { PropsWithTheme } from '../../../Styles/Themes/Themes';

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
  background-color: ${(props: PropsWithTheme) =>
    props.theme.invertedContainerColour};
  color: ${(props: PropsWithTheme) => props.theme.invertedContentColour};

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
  background-color: ${(props: PropsWithTheme) => props.theme.colours.blue};
  color: #e0e0e0;

  font-weight: ${(props: PropsWithTheme) => props.theme.fontWeights.semiBold};
`;

export {
  AccountInfoContainer,
  SummonerLevelBadge,
  SummonerName,
  IconLevelContainer,
  AccountDetailContainer,
  RegionBadgeContainer,
  RegionBadge,
};
