import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { theme } from "./styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
    <App />
      </ChakraProvider>
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
