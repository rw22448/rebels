import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import { Flex } from '../../../Styles/CommonStyles';
import { ThemeObject } from '../../../Styles/Themes/Themes';

interface PlacementProps {
  placement: number;
}

const getPlacementColour = (rank: number): string => {
  switch (rank) {
    case 1:
      return '#00C989';
    case 2:
      return '#009EE2';
    case 3:
      return '#33C2FF';
    case 4:
      return '#85DAFF';
    default:
      return '#C4C4C4';
  }
};

const BasicInfoGridContainer = styled.div`
  display: grid;
  grid-template-columns: 34px 6px 68px;
  gap: 18px;

  ${down('md')} {
    grid-template-columns: 80px;
    grid-template-rows: 30px 19px 19px;
    gap: 0px;
  }

  ${down('sm')} {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const ColouredPlacementBar = styled.div`
  background-color: ${(props: PlacementProps) =>
    getPlacementColour(props.placement)};

  width: 8px;
  height: 68px;
  border-radius: 2px;

  ${down('sm')} {
    height: 27px;
  }

  margin-right: 12px;
`;

const PlacementNumber = styled.h2`
  color: ${(props: PlacementProps) => getPlacementColour(props.placement)};
  align-self: center;

  ${down('md')} {
    font-weight: 600;
    font-size: 20px;
    align-self: start;
  }
`;

const CircleDivider = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  align-self: center;
  background-color: ${(object: ThemeObject) => object.theme.colours.grey.grey};

  ${down('md')} {
    display: none;
  }
`;

const TextFlex = styled(Flex)`
  flex-direction: column;
  width: 68px;

  ${down('sm')} {
    flex-direction: row;
    width: auto;
    align-self: flex-end;
  }
`;

const BasicInfoText = styled.div`
  font-size: 14px;
`;

const MatchDuration = styled(BasicInfoText)`
  ${down('md')} {
    display: none;
  }
`;

const DatePlayed = styled(BasicInfoText)`
  margin-top: auto;

  ${down('sm')} {
    margin: 0px;
  }
`;

const MiddotContainer = styled.span`
  display: none;
  ${down('sm')} {
    display: initial;
  }
`;

export {
  BasicInfoGridContainer,
  ColouredPlacementBar,
  PlacementNumber,
  CircleDivider,
  BasicInfoText,
  MatchDuration,
  DatePlayed,
  TextFlex,
  MiddotContainer,
};
