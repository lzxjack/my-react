import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const Admin = lazy(
  () => import(/* webpackChunkName:'Admin', webpackPrefetch:true */ '@/pages/Admin')
);
const Home = lazy(
  () => import(/* webpackChunkName:'Home', webpackPrefetch:true */ '@/pages/Home')
);
const About = lazy(
  () => import(/* webpackChunkName:'About', webpackPrefetch:true */ '@/pages/Admin/About')
);
const Msg = lazy(
  () => import(/* webpackChunkName:'Msg', webpackPrefetch:true */ '@/pages/Admin/Msg')
);

export default createBrowserRouter([
  {
    path: '',
    element: <Home />
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: '',
        element: <About />
      },
      {
        path: 'msg',
        element: <Msg />
      },
      {
        path: '*',
        element: <Navigate to='' />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='' />
  }
]);
