/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import React from 'react';
import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Titlebar from '../../ui/Titlebar';

export default function ItemAdd() {

  const imgBox = css`
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    padding: .5rem;
    margin-top: 4px;
    margin-right: 20px;

    p {
      line-height: 200px;
    }
  `

  const [item, setItem] = useState({});
  const [file, setFile] = useState();

  const handelChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setItem((item) => ({ ...item, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <Titlebar text='재료 추가'></Titlebar>
      <br />
      <div className='flex'>
        <div css={imgBox}>
          {file && <img src={URL.createObjectURL(file)} alt='local file' />}
          {!file && <p>이미지를 선택해주세요.</p>}
        </div>
        <Form onSubmit={handleSubmit}>
          <input type='file' accept='image/*' name='file' onChange={handelChange} required />
          <input type='text' name='name' value={item.name} placeholder='이름' />
          <input type='text' name='tag' value={item.tag} placeholder='종류' />
          <Button style='dark' text='등록하기'></Button>
        </Form>
      </div>
    </>
  );
}

