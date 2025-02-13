import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home2 from './Home2';
import Login from './Login';
import Register from './Register';
//import Layout from './Layout';

const Layout1 = () => {
  return (
    <Routes>
      
        <Route index element={<Home2 />} />
        <Route path="Login" element={<Login />} />
        <Route path='/Register' element={<Register />} />
    </Routes>
  );
};

export default Layout1;