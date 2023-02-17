/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from 'react';
import { Outlet } from 'react-router';
import Leftbar from '../../component/Leftbar';

export default function Admin() {

  const content = css`
    margin-left: 230px;
    height: calc(100vh - 70px);
    padding: 1.5rem;
  `

  return (
    <div>
      <Leftbar></Leftbar>
      <section css={content}>
        <Outlet></Outlet>
      </section>
    </div>
  );
}

