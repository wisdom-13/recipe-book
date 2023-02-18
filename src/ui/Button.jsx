/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom';

const colors = {
  default: "#fff",
  danger: "rgb(207, 34, 46)",
  outline: "rgb(9, 105, 218)",
};

const styleArr = {
  dark: {
    background: "#000",
    color: "#fff",
  },
  danger: {
    background: "red",
    color: "#fff",
  }
}

export default function Button({ type, text, onClick, style }) {

  const btn = {
    border: "1px solid #222529",
    borderRadius: "5px",
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    lineHeight: '1.5',
    fontWeight: "400",
    ...styleArr[style]
  }

  return (
    type === 'link'
      ? <Link css={btn} to={onClick}>{text}</Link>
      : <button css={btn} onClick={onClick}>{text}</button>
  );
}

