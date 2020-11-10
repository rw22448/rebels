import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './Components/Styles/Styles';
import { Main } from './Components/Main/Main';
import { Profile } from './Components/Profile/Profile';

function App() {
  return (
    <>
      <GlobalStyle />

      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/" render={() => <div>404</div>} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
