import React from 'react';
import { useForm } from 'react-hook-form';
import './LoginForm.css';
import Spinner from '../Preloader/Spinner';

function LoginForm({ onSubmit, isLoginError, isLoading }) {
  const {
    register, handleSubmit, formState: { errors }, formState,
  } = useForm({ mode: 'onBlur' });

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <label className="login-form__label" htmlFor="username">
          Имя пользователя
          <input
            className="login-form__input"
            placeholder="Логин"
            {...register('username', {
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
              required: {
                value: true,
                message: 'Обязательное поле',
              },
              minLength: {
                value: 1,
                message: 'Минимальная длина 1 символ',
              },
              maxLength: {
                value: 128,
                message: 'Максимальная длина 128 символов',
              },
            })}
          />
          <span className="login-form__error">{errors.password && errors.password.message}</span>
        </label>
        {isLoading ? <Spinner /> : (
          <button
            className="login-form__submit"
            type="submit"
            disabled={!formState.isValid}
          >
            Войти
          </button>
        )}

        <span
          className={isLoginError
            ? 'login-form__error'
            : 'login-form__error_is-hidden'}
        >
          Неверный логин или пароль
        </span>
      </form>
    </>
  );
}

export default LoginForm;
