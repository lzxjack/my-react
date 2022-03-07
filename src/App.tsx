import React from 'react';
import s from './App.scss';
import Test from '@/components/Test';
import ErrorBoundary from '@/components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <div className={s.AppBox}>
        <Test text='My React' />
      </div>
    </ErrorBoundary>
  );
};

export default App;
