import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from '@/redux/store';

import App from './App';

if (module?.hot) {
  module.hot.accept();
}

const root = createRoot(document.getElementById('root') as HTMLElement);

const element = (
  <Provider store={store}>
    <Suspense fallback={<>loading...</>}>
      <App />
    </Suspense>
  </Provider>
);

root.render(element);
