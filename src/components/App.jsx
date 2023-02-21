import React, { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { Typography } from '@mui/material';
import { AppBar } from './AppBar/AppBar';
const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

export default function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  

  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
        <Route
          index element={
            <Typography component="h1" variant="h3" color={'secondary'} sx={{ padding: '2rem' }}>
              Phonebook
            </Typography>
          }
        />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
