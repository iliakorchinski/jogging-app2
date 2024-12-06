import { Link } from 'react-router';
import classes from './JogsList.module.css';
import JogsListImage from '../Images/JogsListImage';
interface Jog {
  id: string;
  speed: number;
  distance: number;
  time: number;
  date: Date;
}

type JogListProps = {
  jogs: Jog[];
};

export default function JogsList({ jogs }: JogListProps) {
  return (
    <>
      {jogs.map((jog: Jog) => {
        return (
          <li key={jog.id} className={classes.jog}>
            <JogsListImage />
            <p>Distance: {jog.distance}</p>
            <p>Speed: {jog.speed}</p>
            <p>Time: {jog.time}</p>
            <Link to={`/jogs/${jog.id}/edit`} className={classes.edit}>
              Edit
            </Link>
          </li>
        );
      })}
    </>
  );
}
