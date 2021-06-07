import React, { useState } from 'react';
import mainApi from '../../utils/MainApi';

import './UsersPage.css';
import Header from '../Header/Header';

function UsersPage({ currentUser }) {
  const [usersData, setUsersData] = useState([]);
  console.log(usersData);

  const getUsersHandler = () => {
    mainApi.getUsers(localStorage.getItem('token'))
      .then((users) => setUsersData(users))
      .catch((err) => console.error(err));
  };
  return (
    <div className="users-page">
      <Header currentUser={currentUser} />
      <button
        className="users-page__get-users-btn"
        type="button"
        onClick={getUsersHandler}
      >
        Получить список пользователей
      </button>
    </div>
  );
}

export default UsersPage;
