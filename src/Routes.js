import React from 'react';
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' component={LinkedInCallback} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
