import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuthContext();
  // console.log(`user:${user.uid}`)

  return (
    <header className='flex justify-between'>
      <Link to='/'>
        <h1>냉장고 쏙 레시피</h1>
      </Link>
      <nav className='flex gap-4'>
        <Link to='/recipe'>레시피</Link>
        <Link to='/'>냉장고</Link>
        {user && <Link to='/member/login'>내정보</Link>}
        {user && <button type='button' onClick={logout}>로그아웃</button>}
        {!user && <Link to='/member/login'>로그인</Link>}
        {!user && <Link to='/member/join'>회원가입</Link>}
      </nav>
    </header>
  );
}

