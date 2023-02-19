import React from 'react';
import { Outlet } from 'react-router';
import Leftbar from '../../component/Leftbar';
import Section from '../../ui/Section';

export default function Admin() {

  return (
    <div>
      <Leftbar></Leftbar>
      <Section type='admin'>
        <Outlet></Outlet>
      </Section>
    </div>
  );
}

