import React from 'react';
import { useState } from 'react';
import { Navigate, useParams } from 'react-router';
import { login, join, gooleLogin } from '../api/firebase';

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
    <section>
      <h2 className='text-2xl'>{type == 'join' ? '회원가입' : '로그인'}</h2>
      <form className='flex flex-col px-12'>
        <input type='text' name='id' placeholder='ID' value={member.id || ""} onChange={handelChange}></input>
        <input type='password' name='pw' placeholder='Password' value={member.pw || ""} onChange={handelChange}></input>
        {message && <p className='text-red-500 mb-2'>{message}</p>}
        {type == 'join'
          ? <button className='h-10 px-6 font-semibold rounded-md bg-black text-white' onClick={handleJoin} type='button'>회원가입</button>
          : <button className='h-10 px-6 font-semibold rounded-md bg-black text-white' onClick={handleLogin} type='button'>로그인</button>}
      </form>

      <button onClick={gooleLogin}>구글 로그인</button>
    </section>
  );
}

