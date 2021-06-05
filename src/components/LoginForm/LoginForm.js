import React from 'react';
import { useForm } from 'react-hook-form';

import './LoginForm.css';

function LoginForm({ onSubmit, isLoginError }) {
  const {
    register, handleSubmit, formState: { errors }, formState,
  } = useForm({ mode: 'onBlur' });

  console.log(isLoginError);

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="login-form__label" htmlFor="username">
        Имя пользователя
        <input {...register('username', {
          required: {
            value: true,
            message: 'Обязательное поле',
          },
          minLength: {
            value: 2,
            message: 'Минимальная длина 2 символа',
          },
          maxLength: {
            value: 150,
            message: 'Максимальная длина 150 символов',
          },
          pattern: {
            value: /^[\w.@+-]+$/i,
            message: 'Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.',
          },
        })}
        />
        <span className="login-form__error">{errors.username && errors.username.message}</span>
      </label>
      <label className="login-form__label" htmlFor="password">
        Пароль
        <input
          className="login-form__input"
          type="password"
          placeholder="Пароль"
          autoComplete="off"
          {...register('password', {
            required: true,
            minLength: {
              value: 8,
              message: 'Минимальная длина 8 символов',
            },
            maxLength: {
              value: 150,
              message: 'Максимальная длина 128 символов',
            },
          })}
        />
        <span className="login-form__error">{errors.password && errors.password.message}</span>
      </label>
      <button
        className="login-form__submit"
        type="submit"
        disabled={!formState.isValid}
      >
        Войти
      </button>
    </form>
  );
}

export default LoginForm;
