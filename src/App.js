import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './component/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

