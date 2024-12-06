import { Link } from 'react-router';
import classes from './BurgerMenu.module.css';
type BurgerMenuProps = {
  handleLinkClick: () => void;
};
export default function BurgerMenu({ handleLinkClick }: BurgerMenuProps) {
  return (
    <div className={classes.container}>
      <p>
        <Link to="/jogs" className={classes.link} onClick={handleLinkClick}>
          Jogs
        </Link>
      </p>
      <p>
        <Link to="/about" className={classes.link} onClick={handleLinkClick}>
          Info
        </Link>
      </p>
      <p>
        <Link to="/jogs/new" className={classes.link} onClick={handleLinkClick}>
          New Jog
        </Link>
      </p>
    </div>
  );
}
