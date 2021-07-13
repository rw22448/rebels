import React from 'react';
import {
  Description,
  DescriptionContainer,
  DescriptionHeader,
  DescriptionText,
} from './MainDescription.styles';
const MainDescription = () => {
  return (
    <>
      <Description>
        <DescriptionContainer>
          <DescriptionHeader>
            An online platform for Teamfight Tactics.
          </DescriptionHeader>
          <DescriptionText>
            Rebels is a personal passion project centered around Teamfight
            Tactics, an "auto battler" video game developed by Riot Games.
            Rebels is a platform that gives players access to view player
            profiles and stats, view recent match histories, and compare
            themselves to other players.
          </DescriptionText>
        </DescriptionContainer>
      </Description>
    </>
  );
};

export { MainDescription };
