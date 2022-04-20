import React, { ReactElement } from 'react';
import { Container, Box, Heading, Input, Button, HStack } from '@chakra-ui/react';
import Tickerlist from './Tickerlist';

const Watchlist = (): ReactElement => (
  <>
    <Box p={6} shadow='md' borderWidth='1px'>
      <Heading fontSize='xl'>Trackr Watchlist</Heading>
    </Box>

    <Container maxW={{ base: '100vw', md: '80vw', xl: '50vw' }}>
      <HStack spacing='12px' mt='24px'>
        <Input placeholder='Add Ticker' />
        <Button colorScheme='blue'>Submit</Button>
      </HStack>
      <Tickerlist />
    </Container>
  </>
);

export default Watchlist;
