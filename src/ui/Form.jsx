/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function Form({ children, onSubmit }) {

  const form = css`
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 24px;
    }

    input {
      border-radius: 5px;
      padding: 1rem 0.75rem;
    }

    button {
      padding: 0.75rem;
    }
  `

  return (
    <form css={form} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

