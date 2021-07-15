import styled from 'styled-components';

interface StyledGridProps {
  repeat: number;
}

const ChampionSquareContainer = styled.div`
  display: grid;
  grid-template-rows: 8px 40px 12px;
  gap: 4px;
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
  margin: 0px 6px;
`;

export { ChampionSquareContainer, Center, StyledGrid };
