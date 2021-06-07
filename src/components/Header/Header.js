import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './Header.css';

function Header() {
  const [user, setUser] = useState('');

  const history = useHistory();

  useEffect(() => {
    setUser(localStorage.getItem('currentUser'));
  }, [user]);

  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    history.push('/');
  };

  return (
    <header className="header">
      <p className="header__user-data">
        Привет,
        {' '}
        {user}
        !
      </p>
      <button className="header__logout" type="button" onClick={logoutHandler}>Выйти</button>
    </header>
  );
}

export default Header;
