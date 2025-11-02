import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import App from './App.jsx';

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: () => ({}),
  },
  config: {
    cssVarPrefix: 'ck',
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme} resetCSS={false}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
