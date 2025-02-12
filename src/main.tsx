import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import PhotosPage from './pages/Photos.tsx';
import ContactPage from './pages/Contact.tsx';
import Videos from './pages/Videos.tsx';
import Services from './pages/Services.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: '',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/photos',
        element: <PhotosPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/videos',
        element: <Videos />,
      },
      {
        path: '/services',
        element: <Services />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
