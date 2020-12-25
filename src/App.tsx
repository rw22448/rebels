import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Main } from './Components/Main/Main';
import { Profile } from './Components/Profile/Profile';
import { GlobalStyle } from './Components/Styles/GlobalStyle';
import { ThemeContext } from './Components/Contexts/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />

            <div className="App">
              <BrowserRouter>
                <Switch>
                  <Route path="/" exact component={Main} />
                  <Route
                    path="/profile/:region/:summonerName"
                    exact
                    component={Profile}
                  />
                  <Route path="/" render={() => <div>404</div>} />
                </Switch>
              </BrowserRouter>
            </div>
          </>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
