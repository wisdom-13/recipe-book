import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import Titlebar from '../../ui/Titlebar';

export default function ItemList() {

  return (
    <>
      <Titlebar text='재료 관리'>
        <Button type='link' onClick='/admin/item/add' text='재료 추가' style='dark'></Button>
      </Titlebar>
    </>
  );
}

