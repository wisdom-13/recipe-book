/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from 'react';

export default function ItemAdd() {

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
      <h1 css={title}>재료 추가</h1>
      <div>

      </div>
    </div>
  );
}

