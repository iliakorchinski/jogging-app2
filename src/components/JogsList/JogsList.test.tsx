import { render, screen } from '@testing-library/react';
import { Jog } from './JogsList';
import JogsList from './JogsList';
import { BrowserRouter } from 'react-router-dom';

const data: Jog[] = [
  { distance: 32, id: '123', speed: 3, time: 12, date: new Date() },
];

it('render jogs list', async () => {
  render(<JogsList jogs={data} />, { wrapper: BrowserRouter });

  const item = await screen.findByText('Distance');

  expect(item).toBeInTheDocument();
});
