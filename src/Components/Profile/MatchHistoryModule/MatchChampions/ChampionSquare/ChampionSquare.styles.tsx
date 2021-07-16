import styled, { css, keyframes } from 'styled-components';
import { ThemeObject } from '../../../../Styles/Themes/Themes';

interface RarityGridProps {
  repeat: number;
}

interface ColourProp {
  primaryColour: string;
}

interface ExtraChampionsProps {
  size: number;
}

const returnBGGradientKeyframe = (
  colourOne: string,
  colourTwo: string
) => keyframes`
    0% {
      background-color: ${colourOne};
    }
    50% {
      background-color: ${colourTwo};
    }
    100% {
      background-color: ${colourOne};
    }
`;

const ChampionSquareContainer = styled.div`
  display: grid;
  grid-template-rows: 8px 40px 12px;
  gap: 4px;
`;

const BlankChampionSquareBorder = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(object: ThemeObject) =>
    object.theme.secondaryContainerColour};
  border-radius: 4px;

  position: relative;
  top: 12px;
`;

const BlankSquare = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 3px;

  position: relative;
  top: 2px;
  left: 2px;
`;

const ChampionSquareBorder = styled(BlankChampionSquareBorder)`
  position: initial;

  background-color: ${({ primaryColour }: ColourProp) => primaryColour};
`;

const Square = styled(BlankSquare)`
  background-color: ${(object: ThemeObject) => object.theme.containerColour};
`;

const StyledImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 3px;
`;

const Center = styled.span`
  /* margin: auto; */
  height: 8px;
`;

const StyledGrid = styled.div`
  display: grid;

  margin: 0px auto;
`;

const RarityGrid = styled(StyledGrid)`
  grid-template-columns: ${({ repeat }: RarityGridProps) =>
    `repeat(${repeat}, 8px)`};
  gap: 2px;
`;

const RaritySvg = styled.svg`
  position: relative;
  bottom: 8px;
`;

const RarityCircle = styled.circle``;

const ItemsGrid = styled(StyledGrid)`
  grid-template-columns: ${({ repeat }: RarityGridProps) =>
    `repeat(${repeat}, 12px)`};
  gap: 2px;
`;

const Item = styled.img`
  width: 12px;
  height: 12px;

  border-radius: 2px;
`;

const ExtraSquareContainer = styled.div`
  user-select: none;
`;

const ExtraSquare = styled(BlankChampionSquareBorder)`
  &:hover {
    cursor: pointer;
  }

  animation: ${(object: ThemeObject) =>
    css`
      ${returnBGGradientKeyframe(
        object.theme.secondaryContainerColour,
        object.theme.colours.grey.grey
      )} 10s linear 0s infinite
    `};
`;

const ExtraSquareText = styled(BlankSquare)`
  text-align: center;
  position: relative;
  top: 7px;

  /* Height matches font-size height to align text in the centre */
  height: calc(22px);
`;

const ExtraChampions = styled.div`
  width: ${({ size }: ExtraChampionsProps) =>
    `${size * 40 + 12 * 2 + (size - 1) * 4}px`};
  height: 84px;
  position: relative;
  bottom: 120px;
  right: ${({ size }: ExtraChampionsProps) =>
    `${12 + (size - 1) * 4 + (size - 1) * 40}px`};

  background-color: ${(object: ThemeObject) =>
    object.theme.colours.grey.darkerGrey};

  display: grid;
  grid-template-columns: ${({ size }: ExtraChampionsProps) =>
    `repeat(${size}, 40px)`};
  gap: 4px;

  /* padding: 4px; */
  padding: 8px 12px;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: ${(object: ThemeObject) => object.theme.shadows.downShadow};
`;

export {
  ChampionSquareContainer,
  BlankChampionSquareBorder,
  BlankSquare,
  ChampionSquareBorder,
  Square,
  StyledImage,
  Center,
  RarityGrid,
  RaritySvg,
  RarityCircle,
  ItemsGrid,
  Item,
  ExtraSquareContainer,
  ExtraSquare,
  ExtraSquareText,
  ExtraChampions,
};
