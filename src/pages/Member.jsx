import React from 'react';
import { useState } from 'react';
import { Navigate, useParams } from 'react-router';
import { login, join, gooleLogin } from '../api/firebase';
import Button from '../ui/Button';
import Form from '../ui/Form';
import Section from '../ui/Section';

export default function Member() {
  const { type } = useParams();

  const [member, setMember] = useState({});
  const [message, setMessage] = useState('');

  const handelChange = (e) => {
    const { name, value } = e.target;
    setMember((mem) => ({ ...mem, [name]: value }))
  }

  const handleJoin = (e) => {
    e.preventDefault();
    join(member.id, member.pw).then((result) => {
      !result.state && setMessage(result.message)
      result.state && console.log(result.data)
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(member.id, member.pw).then((result) => {
      alert(result.message);
      // return <Navigate to="/" replace></Navigate>
    });
  };

  return (
    <Section>
      <Form>
        <h2>{type == 'join' ? '회원가입' : '로그인'}</h2>
        <input type='text' name='id' placeholder='ID' value={member.id || ""} onChange={handelChange}></input>
        <input type='password' name='pw' placeholder='Password' value={member.pw || ""} onChange={handelChange}></input>
        {message && <p>{message}</p>}
        {type == 'join'
          ? <Button text='회원가입' style='dark' onClick={handleJoin}></Button>
          : <Button text='로그인' style='dark' onClick={handleLogin}></Button>}
        <button onClick={gooleLogin}>구글 로그인</button>
      </Form>
    </Section>
  );
}

