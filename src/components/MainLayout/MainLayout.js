import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainLayout.css';

export const MainLayout = ({ children }) => (
  <div className = "main-layout">
    { children }
  </div>
);
