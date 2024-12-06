import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './pages/Root';
import Entry from './pages/Entry/Entry';
import Jogs, { loader as jogsLoader } from './pages/Jogs/Jogs';
import NewJog, { loader } from './pages/NewJog/NewJog';
import About from './pages/About/About';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Entry /> },
        { path: '/about', element: <About /> },
        { path: '/jogs', element: <Jogs />, loader: jogsLoader },
        {
          path: '/jogs/new',
          element: <NewJog method="post" />,
          loader: loader,
        },
        {
          path: '/jogs/:id/edit',
          element: <NewJog method="PATCH" />,
          loader: loader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
