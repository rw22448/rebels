import React from 'react';
import { UnitsDTO } from '../../MatchDTO';
import { ChampionSquare } from './ChampionSquare/ChampionSquare';
import { MatchChampionsContainer } from './MatchChampions.styles';

interface MatchChampionsProps {
  championList: UnitsDTO[];
}

const MatchChampions = ({ championList }: MatchChampionsProps) => {
  return (
    <>
      <MatchChampionsContainer>
        {championList.map((champion, index) => (
          <ChampionSquare champion={champion} key={index} />
        ))}
      </MatchChampionsContainer>
    </>
  );
};

export { MatchChampions };
