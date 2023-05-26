import { configureStore } from '@reduxjs/toolkit';

import { nowEnv } from '@/environment';
import count from '@/redux/slices/count';
import isLogin from '@/redux/slices/isLogin';

export default configureStore({
  reducer: { count, isLogin },
  devTools: nowEnv !== 'prod'
});
