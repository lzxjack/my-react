import { Button, DatePicker, Space } from '@arco-design/web-react';
import { useTitle } from 'ahooks';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCount, selectIsLogin } from '@/redux/selectors';
import { decremented, incremented } from '@/redux/slices/count';
import { login, logut } from '@/redux/slices/isLogin';

const Home: React.FC = () => {
  useTitle('Home');

  const count = useSelector(selectCount);
  const isLogin = useSelector(selectIsLogin);

  const dispatch = useDispatch();

  return (
    <div>
      <DatePicker />
      <div>
        <h2>{count}</h2>
        <Space>
          <Button type='primary' onClick={() => dispatch(incremented())}>
            ADD
          </Button>
          <Button type='primary' onClick={() => dispatch(decremented())}>
            SUB
          </Button>
        </Space>
      </div>
      <div>
        <h2>{isLogin ? '已' : '未'}登录</h2>
        <Space>
          <Button type='primary' onClick={() => dispatch(login())}>
            login
          </Button>
          <Button type='primary' onClick={() => dispatch(logut())}>
            logout
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Home;
