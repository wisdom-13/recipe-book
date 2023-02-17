/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Leftbar() {

  const leftbar = css`
    background: #222529;
    width: 230px;
    height: calc(100vh - 70px);
    color: #fff;
    box-shadow: 10px 10px 10px -5px #ccc;
    position: fixed;

    ul {
      padding: 1rem;
    }

    ul li {
      line-height: 50px;
      cursor: pointer;
    }
  `

  return (
    <section css={leftbar}>
      <ul>
        <li><Link to='/admin/item'>재료 관리</Link></li>
        <li>레시피 관리</li>
      </ul>
    </section>
  );
}

