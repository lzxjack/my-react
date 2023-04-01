import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined
} from '@ant-design/icons';
import { useTitle } from 'ahooks';
import { Button } from 'antd';
import React, { lazy } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import RequireAuth from '@/components/RequireAuth';

const About = lazy(
  () => import(/* webpackChunkName:'About', webpackPrefetch:true */ '@/pages/Admin/About')
);
const Msg = lazy(
  () => import(/* webpackChunkName:'Msg', webpackPrefetch:true */ '@/pages/Admin/Msg')
);

const Admin: React.FC = () => {
  useTitle('Admin');
  return (
    <>
      <Button type='primary'>按钮</Button>
      <HomeOutlined />
      <SettingFilled />
      <SmileOutlined />
      <SyncOutlined spin />
      <SmileOutlined rotate={180} />
      <LoadingOutlined />
      <div>
        <Link to=''>about</Link>
        &nbsp;
        <Link to='msg'>msg</Link>
      </div>
      <Routes>
        <Route
          path=''
          element={
            <RequireAuth requireLogin={true} to='/'>
              <About />
            </RequireAuth>
          }
        />
        <Route
          path='msg'
          element={
            <RequireAuth requireLogin={true} to='/'>
              <Msg />
            </RequireAuth>
          }
        />
        <Route path='*' element={<Navigate to='' />} />
      </Routes>
    </>
  );
};

export default Admin;
