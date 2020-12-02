import React from 'react';
import { NavAlt } from '../Navigation/NavAlt/NavAlt';
import { SearchMargin } from './Main.styles';

export const Main = () => {
  return (
    <>
      <SearchMargin>
        <NavAlt />
      </SearchMargin>
      {/* <div>
        Rebels isn't endorsed by Riot Games and doesn't reflect the views or
        opinions of Riot Games or anyone officially involved in producing or
        managing Riot Games properties. Riot Games, and all associated
        properties are trademarks or registered trademarks of Riot Games, Inc.
      </div> */}
    </>
  );
};
