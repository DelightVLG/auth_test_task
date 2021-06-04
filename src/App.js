import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './components/LoginPage/LoginPage';
import Main from './components/Main/Main';

import './App.css';
// import mainApi from './utils/MainApi';

function App() {
  // const getData = () => {
  //   mainApi.getUsers('781bd9f1de084f4daa7ba2aa8a71a2eab855354e')
  //     .then((data) => console.log(data));
  // };
  //
  // getData();

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
