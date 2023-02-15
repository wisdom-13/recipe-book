/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const header = css`
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  text-align: center;
  align-items: center;
  box-shadow: 10px 10px 10px -5px #f2f2f2;


  h1 {
    font-weight: bold;
    font-size: 1.3rem;
    margin-right: 1rem;
  }
`
const nav = css`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  
  a {
    padding: 0 0.5rem;
  }
`

const menu = css`
  margin-right: auto !important;
`



export default function Navbar() {
  const { user, logout } = useAuthContext();
  // console.log(`user:${user.uid}`)

  return (
    <header css={header} className='flex justify-between'>
      <Link to='/'>
        <h1>냉장고 쏙 레시피</h1>
      </Link>
      <nav css={[nav, menu]}>
        <Link to='/recipe'>레시피</Link>
        <Link to='/'>냉장고</Link>
      </nav>
      <nav css={nav}>
        {user && <Link to='/member/login'>내정보</Link>}
        {user && <button type='button' onClick={logout}>로그아웃</button>}
        {!user && <Link to='/member/login'>로그인</Link>}
        {!user && <Link to='/member/join'>회원가입</Link>}
      </nav>
    </header>
  );
}

