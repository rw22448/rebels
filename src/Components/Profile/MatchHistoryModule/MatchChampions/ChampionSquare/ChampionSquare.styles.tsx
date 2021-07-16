import styled from 'styled-components';
import { ThemeObject } from '../../../../Styles/Themes/Themes';

interface StyledGridProps {
  repeat: number;
}

interface ColourProp {
  primaryColour: string;
}

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
  background-color: ${(object: ThemeObject) => object.theme.containerColour};
  border-radius: 3px;

  position: relative;
  top: 2px;
  left: 2px;
`;

const ChampionSquareBorder = styled(BlankChampionSquareBorder)`
  position: initial;

  background-color: ${({ primaryColour }: ColourProp) => primaryColour};
`;

const Square = styled(BlankSquare)``;

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
  grid-template-columns: ${({ repeat }: StyledGridProps) =>
    `repeat(${repeat}, 8px)`};
  gap: 2px;
  margin: 0px auto;
`;

const RaritySvg = styled.svg`
  position: relative;
  bottom: 8px;
`;

const RarityCircle = styled.circle``;

export {
  ChampionSquareContainer,
  BlankChampionSquareBorder,
  BlankSquare,
  ChampionSquareBorder,
  Square,
  StyledImage,
  Center,
  StyledGrid,
  RaritySvg,
  RarityCircle,
};
