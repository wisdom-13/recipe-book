/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemList() {

  const titlebar = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  const title = css`
    font-size: 1.375rem;
    font-weight: bold;
  `

  return (
    <div css={titlebar}>
      <h1 css={title}>재료 관리</h1>
      <div>
        <Link to='/admin/item/add'>재료 추가</Link>
      </div>
    </div>
  );
}

