import React from 'react';
import LoginForm from '../LoginForm/LoginForm';

import './LoginPage.css';

function LoginPage({ onFormSubmit, isLoginError, isLoading }) {
  return (
    <div className="login-page">
      <LoginForm onSubmit={onFormSubmit} isLoginError={isLoginError} isLoading={isLoading} />
    </div>
  );
}

export default LoginPage;
