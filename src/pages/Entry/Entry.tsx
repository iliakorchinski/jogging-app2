import { useContext } from 'react';
import { useNavigate } from 'react-router';
import classes from './Entry.module.css';
import { JogsContext } from '../../store/jogs-context';
import EntryImage from '../../components/Images/EntryImage';

export default function Entry() {
  const JogsCtx = useContext(JogsContext);
  const navigate = useNavigate();
  const handleToken = async () => {
    try {
      const responce = await fetch(
        'https://jogs-tracker-production.up.railway.app/auth/signin',
        {
          method: 'POST',
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: 'alex',
            password: 'qwerty',
          }),
        }
      );

      if (!responce.ok) {
        throw new Error('could not entry...');
      }
      const { accessToken } = await responce.json();
      localStorage.setItem('token', accessToken);
      JogsCtx.getToken(localStorage.getItem('token'));
      return navigate('/jogs');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={classes.container}>
      <EntryImage />

      <button className={classes.button} onClick={handleToken}>
        Let me in
      </button>
    </div>
  );
}
