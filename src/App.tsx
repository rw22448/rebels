import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Main } from './Components/Main/Main';
import { Profile } from './Components/Profile/Profile';
import { GlobalStyle } from './Components/Styles/GlobalStyle';
import { ThemeToggler } from './Components/Styles/Themes/ThemeToggler';
import { useTheme } from './Components/Styles/Themes/useTheme';

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />

        <div className="App">
          <BrowserRouter>
            <Switch>
              {/* <Route path="/" exact component={Main} />
              <Route path="/profile" exact component={Profile} /> */}
              <Route path="/" exact component={Profile} />
              <Route path="/" render={() => <div>404</div>} />
            </Switch>
          </BrowserRouter>
          {/* <ThemeToggler toggleTheme={toggleTheme} /> */}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
