import React from 'react';
import { Outlet } from 'react-router-dom';
import { CartModal } from './CartModal';

function AppRoot(props) {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <CartModal />
    </>
  );
}

export default AppRoot;
