import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Main from './components/Main/Main';
import LoginPage from './components/LoginPage/LoginPage';
import UsersPage from './components/UsersPage/UsersPage';

import mainApi from './utils/MainApi';

import './App.css';

function App() {
  const [isLoginError, setIsLoginError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const submitHandler = (formData) => {
    setIsLoading(true);
    mainApi.getToken(formData.username, formData.password)
      .then((data) => {
        if (data) {
          setIsLoading(false);
          localStorage.setItem('token', data.token);
          localStorage.setItem('currentUser', formData.username);
          history.push('/user-page');
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setIsLoginError(true);
        console.error(err);
      });
  };

  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/login">
          <LoginPage
            onFormSubmit={submitHandler}
            isLoginError={isLoginError}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/user-page">
          <UsersPage />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
