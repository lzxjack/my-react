import React, { lazy, Suspense } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';
// import Admin from '@/pages/Admin';
// import Home from '@/pages/Home';
import s from './App.scss';

const Admin = lazy(
  () => import(/* webpackChunkName:'Admin', webpackPrefetch:true */ '@/pages/Admin')
);
const Home = lazy(() => import(/* webpackChunkName:'Home', webpackPrefetch:true */ '@/pages/Home'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className={s.AppBox}>
        <nav>
          <Link to='/admin'>admin</Link>
          &nbsp;
          <Link to='/home'>home</Link>
        </nav>
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<>123123</>}>
                <Admin />
              </Suspense>
            }
          />
          <Route
            path='admin'
            element={
              <Suspense fallback={<>123123123</>}>
                <Admin />
              </Suspense>
            }
          />
          <Route
            path='home'
            element={
              <Suspense fallback={<>12312312</>}>
                <Home />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </ErrorBoundary>
  );
};

export default App;
