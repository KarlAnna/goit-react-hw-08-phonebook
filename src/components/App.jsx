import React, { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
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
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<Register />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
}
