import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Watchlist from './components/Watchlist';

const App = () => (
  <ChakraProvider>
    <Watchlist />
  </ChakraProvider>
);

export default App;
