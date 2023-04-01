import './global.custom.scss';

import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from '@/router';

import s from './App.scss';

const App: React.FC = () => {
  // const navigate = useNavigate();

  return (
    <div className={s.AppBox}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
