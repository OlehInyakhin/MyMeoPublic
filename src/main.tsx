import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Providers } from '@/providers';
import '@/assets/styles/index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Providers>
    <App />
  </Providers>,
);
