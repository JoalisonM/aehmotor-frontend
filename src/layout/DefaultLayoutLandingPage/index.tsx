import { Outlet } from 'react-router-dom';

import { Header } from '../../components/HeaderLandingPage';

export function DefaultLayoutLandingPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
