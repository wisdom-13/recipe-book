/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function Section({ children, type = 'def' }) {

  const option = {
    admin: {
      marginLeft: "230px",
    }
  }

  const content = {
    height: "calc(100vh - 70px)",
    padding: "1.5rem",
    ...option[type]
  }

  return (
    <section css={content}>
      {children}
    </section>
  );
}

