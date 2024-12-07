import { Link } from 'react-router';
import classes from './JogsList.module.css';
import JogsListImage from '../Images/JogsListImage';
export interface Jog {
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
            <div className={classes.container}>
              <p className={classes.date}>{jog.date.toString().slice(0, 10)}</p>
              <p className={classes.p}>Distance: {jog.distance}</p>
              <p className={classes.p}>Speed: {jog.speed}</p>
              <p className={classes.p}>Time: {jog.time}</p>
              <Link to={`/jogs/${jog.id}/edit`} className={classes.edit}>
                Edit
              </Link>
            </div>
          </li>
        );
      })}
    </>
  );
}
