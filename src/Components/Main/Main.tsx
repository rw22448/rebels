import React from 'react';
import { NavAlt } from '../Navigation/NavAlt/NavAlt';
import { Flex } from '../Styles/CommonStyles';
import { Content } from './Main.styles';
import { MainBanner } from './MainBanner/MainBanner';

export const Main = () => {
  return (
    <>
      <Flex>
        <Content>
          <NavAlt />
          <h1>Search</h1>
        </Content>
        <MainBanner />
      </Flex>

      <div>
        Rebels isn't endorsed by Riot Games and doesn't reflect the views or
        opinions of Riot Games or anyone officially involved in producing or
        managing Riot Games properties. Riot Games, and all associated
        properties are trademarks or registered trademarks of Riot Games, Inc.
      </div>
    </>
  );
};
