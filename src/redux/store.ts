import { configureStore } from '@reduxjs/toolkit';

import count from '@/redux/slices/count';
import isLogin from '@/redux/slices/isLogin';

export default configureStore({
  reducer: { count, isLogin },
  devTools: process.env.NODE_ENV !== 'production'
});
