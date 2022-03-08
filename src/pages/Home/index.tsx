import React from 'react';
import { DatePicker } from 'antd';
import { useTitle } from 'ahooks';

const Home: React.FC = () => {
  useTitle('Home');
  return <DatePicker />;
};

export default Home;
