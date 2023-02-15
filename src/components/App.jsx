import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import './Phonebook.css';
const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
