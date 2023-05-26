import { Button } from '@arco-design/web-react';
import {
  IconFile,
  IconGoogle,
  IconLanguage,
  IconLoading
} from '@arco-design/web-react/icon';
import { useTitle } from 'ahooks';
import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Admin: React.FC = () => {
  useTitle('Admin');
  return (
    <>
      <Button type='primary'>Primary</Button>
      <Button type='secondary'>Secondary</Button>
      <Button type='dashed'>Dashed</Button>
      <Button type='outline'>Outline</Button>
      <Button type='text'>Text</Button>
      <IconLoading />
      <IconFile />
      <IconLanguage />
      <IconGoogle />

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
