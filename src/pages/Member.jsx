import React from 'react';
import { useState } from 'react';
import { login } from '../api/firebase';

export default function Member() {

  const [member, setMember] = useState({});


  const handelChange = (e) => {
    const { name, value } = e.target;
    setMember((mem) => ({ ...mem, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(member)
    login(member.id, member.pw);
  };
  return (
    <section>
      <h2>로그인 / 회원가입</h2>
      <form className='flex flex-col px-12' onSubmit={handleSubmit}>
        <input type='text' name='id' placeholder='ID' value={member.id} onChange={handelChange}></input>
        <input type='password' name='pw' placeholder='Password' value={member.pw} onChange={handelChange}></input>
        <button>회원가입</button>
      </form>
    </section>
  );
}

