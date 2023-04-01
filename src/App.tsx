import './global.custom.scss';

import React, { lazy } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import RequireAuth from '@/components/RequireAuth';

import s from './App.scss';

const Admin = lazy(
  () => import(/* webpackChunkName:'Admin', webpackPrefetch:true */ '@/pages/Admin')
);
const Home = lazy(
  () => import(/* webpackChunkName:'Home', webpackPrefetch:true */ '@/pages/Home')
);

const App: React.FC = () => {
  return (
    <div className={s.AppBox}>
      <div>
        <Link to='/'>home</Link>
        &nbsp;
        <Link to='/admin'>admin</Link>
      </div>

      <Routes>
        <Route
          path='/'
          element={
            <RequireAuth requireLogin={false} to='admin'>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path='admin/*'
          element={
            <RequireAuth requireLogin={true} to='/'>
              <Admin />
            </RequireAuth>
          }
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
};

export default App;
