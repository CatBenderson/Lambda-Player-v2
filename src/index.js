import React from 'react';
import { extendTheme, ChakraProvider, Box, Heading, Center } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Reproductor from "./Reproductor"
import Song from './Song';
import Busqueda from './Búsqueda';

const theme = extendTheme({
  fonts: {
    heading: `'Gabarito', sans-serif;`,
    body: `'Gabarito', sans-serif;`,
  },

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <Box backgroundColor="#282828" w="100%" h="100%">
      <Center>
        <Heading size="2xl" color="white" marginY="2vh">LambdaPlayer</Heading>
      </Center>
      <Box display="flex" marginX={30}>
        <Song></Song>
        <Busqueda></Busqueda>
      </Box>
      <Reproductor></Reproductor>
    </Box>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();