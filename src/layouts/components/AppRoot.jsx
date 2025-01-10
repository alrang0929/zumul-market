import React from 'react';
import { Outlet } from 'react-router-dom';
import { CartModal } from './CartModal';

function AppRoot(props) {
  return (
    <>
      <main style={{ position: 'relative' }}>
        <Outlet />
      <CartModal />
      </main>
    </>
  );
}

export default AppRoot;
