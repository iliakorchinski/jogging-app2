import { useLoaderData, useNavigate, useParams } from 'react-router';
import classes from './NewJog.module.css';

type NewJogProps = {
  method: string;
};

export default function NewJog({ method }: NewJogProps) {
  let data = useLoaderData();
  const { id } = useParams();

  const { jogs } = data;

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
      //https://jogs-tracker-production.up.railway.app/jogs/6751b383fdeafecbef4e69bc
      const responce = await fetch(
        `https://jogs-tracker-production.up.railway.app/jogs/${id ? id : ''}`,
        {
          method: method,
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
        <input
          name="distance"
          type="number"
          defaultValue={jogs ? jogs[0].distance : ''}
        />
      </p>
      <p>
        <label>Time</label>
        <input
          name="time"
          type="number"
          defaultValue={jogs ? jogs[0].time : ''}
        />
      </p>
      <p>
        <label>Date</label>
        <input
          type="date"
          name="date"
          defaultValue={jogs ? jogs[0].date : ''}
        />
      </p>
      <button type="submit" className={classes.button}>
        Save
      </button>
    </form>
  );
}

export async function loader({ params }: any) {
  const id = params.id;
  const token = localStorage.getItem('token');

  const responce = await fetch(
    `https://jogs-tracker-production.up.railway.app/jogs/${id}`,
    {
      method: 'GET',
      headers: {
        accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return responce;
}
