import React from 'react';
import { Outlet } from 'react-router-dom';

function AppRoot(props) {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default AppRoot;
