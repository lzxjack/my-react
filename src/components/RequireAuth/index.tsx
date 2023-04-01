import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { loginState } from '@/utils/constant';

interface Props {
  requireLogin: boolean;
  to: string;
  children: any;
}

export default ({ requireLogin, to, children }: Props) => {
  const location = useLocation();
  if (requireLogin) {
    return loginState ? (
      children
    ) : (
      <Navigate to={to} state={{ from: location }} replace />
    );
  } else {
    return loginState ? (
      <Navigate to={to} state={{ from: location }} replace />
    ) : (
      children
    );
  }
};
