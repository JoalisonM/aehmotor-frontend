import { Outlet } from 'react-router-dom';

import { Header } from '../../components/HeaderHome';

export function DefaultLayoutHome() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
