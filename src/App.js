import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './components/LoginPage/LoginPage';
import Main from './components/Main/Main';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
