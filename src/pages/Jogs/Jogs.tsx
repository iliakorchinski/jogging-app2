import classes from './Jogs.module.css';
import { useLoaderData } from 'react-router';
import { useState } from 'react';
import JogsList from '../../components/JogsList/JogsList';
interface Jog {
  id: string;
  speed: number;
  distance: number;
  time: number;
  date: Date;
}

export default function Jogs() {
  const data = useLoaderData();
  const [datePicker, setDatePicker] = useState<any>(null);

  const { jogs } = data;

  const filterredJogs = jogs.filter(
    (jog: Jog) =>
      datePicker && jog.date > datePicker.from && jog.date < datePicker.to
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const formValues = {
      from: formData.get('from'),
      to: formData.get('to'),
    };
    setDatePicker(formValues);
  };

  return (
    <>
      <form className={classes['date-container']} onSubmit={handleSubmit}>
        <p className={classes.date}>
          <label>Date from</label>
          <input className={classes.input} type="date" name="from" />
        </p>
        <p className={classes.date}>
          <label>Date to</label>
          <input className={classes.input} type="date" name="to" />
        </p>
        <button className={classes.button}>Submit</button>
      </form>
      <ul className={classes.container}>
        {filterredJogs.length === 0 && <JogsList jogs={jogs} />}
        {filterredJogs.length > 0 && <JogsList jogs={filterredJogs} />}
      </ul>
    </>
  );
}

export async function loader() {
  try {
    const token = localStorage.getItem('token');
    const responce = await fetch(
      'https://jogs-tracker-production.up.railway.app/jogs',
      {
        method: 'GET',
        headers: {
          accept: '*/*',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!responce.ok) {
      throw new Error('Could not get jogs...');
    }
    const data = await responce.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
