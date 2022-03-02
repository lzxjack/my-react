import React from 'react';
import s from './App.scss';
import Test from '@/components/Test';

const App = () => {
  return (
    <div className={s.AppBox}>
      <Test text='My React' />
    </div>
  );
};

export default App;
