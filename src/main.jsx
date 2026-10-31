import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// GitHub Pages는 새로고침할 때 하위 주소를 찾지 못해서, 주소 뒤에 #을 붙이는 HashRouter를 써요.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
