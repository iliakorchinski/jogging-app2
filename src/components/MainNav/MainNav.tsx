import { useContext } from 'react';
import { Link } from 'react-router';
import classes from './MainNav.module.css';
import { JogsContext } from '../../store/jogs-context';
import MainNavImage from '../Images/MainNavImage';
import LogoImage from '../Images/LogoImage';

type MainNavProps = {
  handleToggle: () => void;
};
export default function MainNav({ handleToggle }: MainNavProps) {
  const JogsCtx = useContext(JogsContext);
  const token = JogsCtx.token;

  return (
    <header className={classes.header}>
      <LogoImage />
      {token && (
        <>
          <button className={classes.burger} onClick={handleToggle}>
            <MainNavImage />
          </button>
          <ul className={classes.container}>
            <li>
              <Link to="/jogs" className={classes.link}>
                Jogs
              </Link>
            </li>
            <li>
              <Link to="/about" className={classes.link}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/contacts" className={classes.link}>
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/jogs/new" className={classes.link}>
                Create a jog
              </Link>
            </li>
          </ul>
        </>
      )}
    </header>
  );
}
