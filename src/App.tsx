import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './pages/Root';
import Entry from './pages/Entry/Entry';
import Jogs from './pages/Jogs/Jogs';
import NewJog from './pages/NewJog/NewJog';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Entry /> },
        { path: '/jogs', element: <Jogs /> },
        { path: '/jogs/new', element: <NewJog /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
