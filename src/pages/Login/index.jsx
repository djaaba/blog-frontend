import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import styles from "./Login.module.scss";
import { fetchAuth, selectIsAuth } from "../../store/slices/auth";

export const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth)

  const { register, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      email: 'test1@test.ru',
      password: '123456'
    },
    mode: 'onChange'
  });

  const onSubmit = async (data) => {
    const value = await dispatch(fetchAuth(data))

    if(!value.payload) alert('Ошибка авторизации')

    if ('token' in value.payload) {
      window.localStorage.setItem('token', value.payload.token)
      window.localStorage.setItem('id', value.payload._id)
    }
  }

  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="E-Mail"
          type='email'
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', { required: 'Укажите почту' })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Пароль"
          helperText={errors.password?.message}
          error={Boolean(errors.email?.message)}
          fullWidth {...register('password', { required: 'Введите пароль' })}
        />
        <Button type='sudmit' size="large" variant="contained" fullWidth>
          Войти
        </Button>
      </form>
    </Paper>
  );
};
