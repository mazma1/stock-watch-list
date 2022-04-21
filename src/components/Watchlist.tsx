import React, { useState, ReactElement, ChangeEvent, MouseEvent } from 'react';
import { useLiveQuery } from "dexie-react-hooks";
import { Container, Box, Heading, Input, Button, HStack, useToast } from '@chakra-ui/react';
import Tickerlist from './Tickerlist';
import { db } from '../APIs/dexie';
import getTickerPayload from '../utils/getTickerPayload';
import getTickerFromDB from '../utils/getTickerFromDB';

const Watchlist = (): ReactElement => {
  const toast = useToast();
  const [ticker, setTicker] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const allTickers = useLiveQuery(() => db.table('tickers').toArray(), []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTicker(event.target.value.toUpperCase());
  }

  const handleSubmit = async(event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      const MAX_TICKER_LENGTH = 5;
      const tickerInDB = await getTickerFromDB(ticker);

      if (tickerInDB) {
        return toast({
          title: 'Duplicate',
          description: "Ticker already added.",
          status: 'info',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      }

      if (ticker.length > MAX_TICKER_LENGTH ) {
        return toast({
          title: 'Invalid ticker',
          description: "Stock ticker is invalid.",
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      }

      setIsLoading(true);

      const payload = await getTickerPayload(ticker);
      db.table('tickers').add(payload);

      setIsLoading(false);
      toast({
        title: 'Request completed',
        description: "New ticker successfully added.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (error) {
      let errorMessage;
      if (error instanceof Error) {
        errorMessage = JSON.parse(error.message).message;
      }
      setIsLoading(false);
      toast({
        title: 'Something went wrong',
        description: errorMessage || "Error adding ticker, try again.",
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      })
    }
  };

  return (
    <>
      <Box p={6} shadow='md' borderWidth='1px'>
        <Heading fontSize='xl'>Trackr Watchlist</Heading>
      </Box>

      <Container maxW={{ base: '100vw', md: '80vw', xl: '50vw' }}>
        <HStack spacing='12px' mt='24px'>
          <Input placeholder='Add Ticker' onChange={handleInputChange} />
          <Button
            isLoading={isLoading}
            colorScheme='blue'
            onClick={handleSubmit}
          >
            Submit
          </Button>
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
