/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function Titlebar({ children, text }) {

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
      <h1 css={title}>{text}</h1>
      <div>
        {children}
      </div>
    </div>
  );
}

