import { useNavigate } from 'react-router';
import classes from './NewJog.module.css';

export default function NewJog() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const formValues = {
        distance: Number(formData.get('distance')),
        time: Number(formData.get('time')),
        date: formData.get('date'),
      };
      console.log(formValues);

      const responce = await fetch(
        'https://jogs-tracker-production.up.railway.app/jogs',
        {
          method: 'POST',
          headers: {
            accept: '*/*',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formValues),
        }
      );

      if (!responce.ok) {
        throw new Error('Could not add a jog...');
      }
      console.log(responce);
      navigate('/jogs');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form className={classes.form} onSubmit={handleSubmitForm}>
      <p>
        <label>Distance</label>
        <input name="distance" type="number" />
      </p>
      <p>
        <label>Time</label>
        <input name="time" type="number" />
      </p>
      <p>
        <label>Date</label>
        <input type="date" name="date" />
      </p>
      <button type="submit" className={classes.button}>
        Save
      </button>
    </form>
  );
}
