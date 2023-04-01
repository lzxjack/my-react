import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined
} from '@ant-design/icons';
import { useTitle } from 'ahooks';
import { Button } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

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
      <Outlet />
    </>
  );
};

export default Admin;
