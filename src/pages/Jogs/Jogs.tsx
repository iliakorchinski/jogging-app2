import classes from './Jogs.module.css';
import { Link, useLoaderData } from 'react-router';

interface Jog {
  id: string;
  speed: number;
  distance: number;
  time: number;
}

export default function Jogs() {
  const data = useLoaderData();
  const { jogs } = data;
  console.log(jogs);

  return (
    <ul className={classes.container}>
      {jogs.map((jog: Jog) => {
        return (
          <li key={jog.id} className={classes.jog}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="87"
              height="87"
              viewBox="0 0 87 87"
            >
              <g fill="none" fillRule="evenodd">
                <circle cx="43.5" cy="43.5" r="43.5" fill="#E990F9" />
                <g fill="#FFF">
                  <path d="M32.932 28.86h16.937a.808.808 0 0 0 .806-.81.807.807 0 0 0-.806-.809H32.932a.807.807 0 0 0-.806.809c0 .447.36.81.806.81zM17.784 36.772h16.937a.807.807 0 0 0 .806-.81c0-.446-.36-.809-.806-.809H17.784a.808.808 0 0 0-.806.81c0 .447.361.809.806.809zM22.331 45.099c0 .446.36.809.805.809h16.938a.807.807 0 0 0 .806-.81c0-.446-.36-.809-.806-.809H23.136a.807.807 0 0 0-.805.81zM32.024 54.504H16.806a.807.807 0 0 0-.806.809c0 .447.36.81.806.81h15.218a.807.807 0 0 0 .806-.81.807.807 0 0 0-.806-.81zM59.407 33.933c2.43 0 4.4-1.979 4.4-4.42s-1.97-4.42-4.4-4.42c-2.432 0-4.402 1.98-4.402 4.42 0 2.441 1.97 4.42 4.402 4.42z" />
                  <path d="M66.647 32.66c-2.527 3.556-5.912 3.967-9.554 1.796-.247-.147-1.347-.756-1.59-.901-5.86-3.493-11.71-2.124-15.636 3.396-1.667 2.347 2.19 4.572 3.84 2.252 2.027-2.852 4.605-3.677 7.425-2.773-1.444 2.517-2.706 5.018-4.488 8.572-1.781 3.554-5.715 6.392-9.494 4.172-2.728-1.6-5.187 2.334-2.468 3.93 5.16 3.028 11.21 1.169 14.299-2.768.107.057.22.11.344.153 2.524.883 5.831 3.233 6.84 4.066 1.006.833 2.738 5.077 3.765 7.21 1.248 2.586 5.275.702 4.023-1.896-1.165-2.42-3.121-7.248-4.646-8.47-1.224-.979-3.6-2.802-5.615-3.836a176.456 176.456 0 0 1 4.277-7.854c4.763 1.466 9.29-.26 12.515-4.797 1.67-2.347-2.187-4.572-3.837-2.252z" />
                </g>
              </g>
            </svg>
            <p>Distance: {jog.distance}</p>
            <p>Speed: {jog.speed}</p>
            <p>Time: {jog.time}</p>
            <Link to={`/jogs/${jog.id}/edit`} className={classes.edit}>
              Edit
            </Link>
          </li>
        );
      })}
    </ul>
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
