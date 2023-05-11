import './Popup.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';

function Popup() {
  return (
    <div className='main-container'>
      <h2>Websites Fixer</h2>
    </div>
  );
}

const rootContainer = document.getElementById('root-om-chrome-ext');
if (rootContainer) {
  const root = createRoot(rootContainer);
  root.render(
    <React.StrictMode>
      <Popup />
    </React.StrictMode>,
  );
}
