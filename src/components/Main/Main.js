import React from 'react';
import LinkButton from '../UI/LinkButton/LinkButton';

import './Main.css';

function Main() {
  return (
    <main className="main">
      <div className="main__links-container">
        <LinkButton title="Войти" path="login" />
        <LinkButton title="Регистрация" path="registration" />
      </div>
    </main>
  );
}

export default Main;
