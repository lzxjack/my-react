import './global.custom.scss';

import React, { lazy } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

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
        <Route path='/' element={<Home />} />
        <Route path='admin/*' element={<Admin />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
};

export default App;
