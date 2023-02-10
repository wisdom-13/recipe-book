import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user } = useAuthContext();
  console.log(`user:${user.uid}`)

  return (
    <header className='flex justify-between'>
      <Link to='/'>
        <h1>냉장고 쏙 레시피</h1>
      </Link>
      <nav className='flex gap-4'>
        <Link to='/recipe'>레시피</Link>
        <Link to='/'>냉장고</Link>
        <Link to='/member/login'>로그인</Link>
        <Link to='/member/join'>회원가입</Link>
      </nav>
    </header>
  );
}

