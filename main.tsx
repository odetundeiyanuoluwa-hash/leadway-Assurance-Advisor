import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';

import './index.css';

// Safety net: ensure body is never stuck invisible (next-themes can
// temporarily set visibility:hidden while detecting theme).
document.body.style.visibility = 'visible';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
