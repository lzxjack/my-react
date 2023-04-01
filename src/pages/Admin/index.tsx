import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined
} from '@ant-design/icons';
import { useTitle } from 'ahooks';
import { Button } from 'antd';
import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

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
      <nav>
        <Link to='xixi'>xixi</Link>
        &nbsp;
        <Link to='haha'>haha</Link>
      </nav>
      <div>
        <Suspense fallback={<>loading...</>}>
          <Routes>
            <Route path='xixi' element={<div>嘻嘻</div>} />
            <Route path='haha' element={<div>哈哈</div>} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default Admin;
