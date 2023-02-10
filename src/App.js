import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './component/Navbar';
import { AuthContextProvider } from './context/AuthContext';

export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </div>
  );
}

