import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Main } from './Components/Main/Main';
import { Profile } from './Components/Profile/Profile';
import { GlobalStyle } from './Components/Styles/GlobalStyle';
import { ThemeContext } from './Components/Contexts/ThemeContext';
import { Flex } from './Components/Styles/CommonStyles';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />

          <div className="App">
            <BrowserRouter>
              <Flex>
                <Switch>
                  <Route path="/" exact component={Main} />
                  <Route
                    path="/profile/:region/:username"
                    exact
                    component={Profile}
                  />
                  <Route path="/" render={() => <div>404</div>} />
                </Switch>
              </Flex>
            </BrowserRouter>
          </div>
        </>
      </ThemeProvider>
    </>
  );
};

export default App;
