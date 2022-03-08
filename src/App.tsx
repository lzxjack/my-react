import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';
import Admin from '@/pages/Admin';
import Home from '@/pages/Home';
import { DatePicker } from 'antd';
import s from './App.scss';

const App: React.FC = () => {
  // return (
  //   <div className={s.AppBox}>
  //     <DatePicker />
  //   </div>
  // );

  return (
    <ErrorBoundary>
      <div className={s.AppBox}>
        <nav>
          <Link to='/admin'>admin</Link>
          &nbsp;
          <Link to='/home'>home</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Admin />} />
          <Route path='admin' element={<Admin />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
};

export default App;
