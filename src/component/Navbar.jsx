import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='flex justify-between'>
      <Link to='/'>
        <h1>냉장고 쏙 레시피</h1>
      </Link>
      <nav className='flex gap-4'>
        <Link to='/recipe'>레시피</Link>
        <Link to='/'>냉장고</Link>
      </nav>
    </header>
  );
}

