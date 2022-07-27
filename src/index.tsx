import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log('页面刷新啦')
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

