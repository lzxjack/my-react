import { useTitle } from 'ahooks';
import { Button } from 'antd';
import React from 'react';

const Admin: React.FC = () => {
  useTitle('Admin');
  return <Button type='primary'>按钮</Button>;
};

export default Admin;
