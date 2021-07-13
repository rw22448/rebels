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

const ColouredPlacementBar = styled.div`
  background-color: ${(props: PlacementProps) =>
    getPlacementColour(props.placement)};

  width: 8px;
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
  margin: 0px 18px;
  align-self: center;
  background-color: ${(object: ThemeObject) => object.theme.colours.grey.grey};

  ${down('md')} {
    display: none;
  }
`;

const TextFlex = styled(Flex)`
  flex-direction: column;
  width: 68px;
`;

const BasicInfoText = styled.div`
  font-size: 14px;
`;

const DatePlayed = styled(BasicInfoText)`
  margin-top: auto;
`;

export {
  ColouredPlacementBar,
  PlacementNumber,
  CircleDivider,
  BasicInfoText,
  DatePlayed,
  TextFlex,
};
