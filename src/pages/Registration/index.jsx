import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { fetchRegister, selectIsAuth } from "../../store/slices/auth";
import styles from './Login.module.scss';

export const Registration = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth)

  const { register, handleSubmit, setError, formState: { errors, isValid }, } = useForm({
    defaultValues: {
      fullName: "Тест Юзер",
      email: 'test5@test.ru',
      password: '123456'
    },
    mode: 'onChange'
  });

  const onSubmit = async (data) => {
    const value = await dispatch(fetchRegister(data))

    if (!value.payload) alert('Ошибка регистрации')

    if ('token' in value.payload) {
      window.localStorage.setItem('token', value.payload.token)
    }
  }

  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField className={styles.field}
          label="Полное имя"
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          {...register('fullName', { required: 'Укажите полное имя' })}
          fullWidth
        />
        <TextField className={styles.field}
          label="E-Mail"
          type='email'
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', { required: 'Укажите почту' })}
          fullWidth
        />
        <TextField className={styles.field}
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', { required: 'Введите пароль' })}
          label="Пароль"
          fullWidth
        />
        <Button disabled={!isValid} type='sudmit' size="large" variant="contained" fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
};
