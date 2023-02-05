import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../api/firebase'

export default function Navbar() {
  return (
    <header className='flex justify-between'>
      <Link to='/'>
        <h1>냉장고 쏙 레시피</h1>
      </Link>
      <nav className='flex gap-4'>
        <Link to='/recipe'>레시피</Link>
        <Link to='/'>냉장고</Link>
        <button onClick={login}>로그인</button>
      </nav>
    </header>
  );
}

