import React, { ReactElement } from 'react';
import { useLiveQuery } from "dexie-react-hooks";
import { Container, Box, Heading, Input, Button, HStack } from '@chakra-ui/react';
import Tickerlist from './Tickerlist';
import { db } from '../APIs/dexie';

const Watchlist = (): ReactElement => {
  const allTickers = useLiveQuery(() => db.table('tickers').toArray(), []);

  return (
    <>
      <Box p={6} shadow='md' borderWidth='1px'>
        <Heading fontSize='xl'>Trackr Watchlist</Heading>
      </Box>

      <Container maxW={{ base: '100vw', md: '80vw', xl: '50vw' }}>
        <HStack spacing='12px' mt='24px'>
          <Input placeholder='Add Ticker' />
          <Button colorScheme='blue'>Submit</Button>
        </HStack>

        { allTickers && allTickers.length > 0 
            ? <Tickerlist items={allTickers} />
            : <Box mt='24px'>No tickers to display</Box>
        }
      </Container>
    </>
  );
};

export default Watchlist;
