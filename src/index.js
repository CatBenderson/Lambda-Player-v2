import React from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';


const theme = extendTheme({
  fonts: {
    heading: `'Gabarito', sans-serif;`,
    body: `'Gabarito', sans-serif;`,
    color: `#332D27;`,
  },

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <Home/>  
  </ChakraProvider>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
