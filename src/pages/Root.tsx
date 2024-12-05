import { Outlet } from 'react-router';
import MainNav from '../components/MainNav/MainNav';

export default function RootLayout() {
  return (
    <main>
      <MainNav />
      <Outlet />
    </main>
  );
}
