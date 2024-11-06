import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Progress from './components/Progress/Progress.jsx';
import Structure from './components/Structure/Structure.jsx';
import StrategicTheme2 from './components/Structure/strategicTheme2.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/progress",
        element: <Progress />
      },
      {
        path: "/structure",
        element: <Structure />
      },
      {
        path: "/strategic-theme2",
        element: <StrategicTheme2 />
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
