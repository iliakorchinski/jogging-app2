import { Outlet } from 'react-router';
import MainNav from '../components/MainNav/MainNav';
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function RootLayout() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleDisableMenu = () => {
    setIsActiveMenu(false);
  };

  const handleToggle = () => {
    setIsActiveMenu((prevState) => !prevState);
  };
  return (
    <main>
      <MainNav handleToggle={handleToggle} />
      {!isActiveMenu && <Outlet />}
      {isActiveMenu && <BurgerMenu handleLinkClick={handleDisableMenu} />}
    </main>
  );
}
