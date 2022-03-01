import React from 'react';
import s from './index.scss';

type Props = {
  text: string;
};

const Test: React.FC<Props> = ({ text }) => {
  return <div className={s.TestBox}>{text}</div>;
};

export default Test;
