// js热替换
if (module && module.hot) {
  module.hot.accept();
}

import style from './index.scss';

const ele = document.querySelector('#root');

const newEle = document.createElement('div');
newEle.className = style.ele;
newEle.innerHTML = '测试css module';
ele.appendChild(newEle);
