import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { EcAdminApp } from './EcAdminApp';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EcAdminApp />
  </StrictMode>
);
