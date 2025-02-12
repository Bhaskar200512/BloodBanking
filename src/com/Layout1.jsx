import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Layout from './Layout';

const Layout1 = () => {
  return (
    <Routes>
      
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
      
    </Routes>
  );
};

export default Layout1;
