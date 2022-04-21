import React, { ReactElement } from 'react';
import { Box, IconButton, useToast } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Tr, Td } from '@chakra-ui/react';
import TickerlistParent from './TickerlistTable';
import TickerItem from '../interfaces/TickerItem.interface';
import { removeItemFromDb } from '../APIs/dexie';


const Tickerlist = ({ items }: any): ReactElement => {
  const toast = useToast();

  const handleDeleteTicker = async (id: number) => {
    try {
      await removeItemFromDb(id);
      toast({
        title: 'Request completed',
        description: "Ticker successfully deleted.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: "Error deleting ticker, try again.",
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
    }
  }
  return (
    <Box w='100%' py={8}>
      <TickerlistParent>
        { items.length > 0 && items.map((item: TickerItem) => {
          if (item.id) {
            const { id } = item;
            return (
              <Tr key={item.id}>
                <Td>{item.ticker}</Td>
                <Td>{item.name}</Td>
                <Td isNumeric>977.20</Td>
                <Td isNumeric>{item.openPrice}</Td>
                <Td isNumeric>{item.closePrice}</Td>
                <Td>
                  <IconButton
                    aria-label='Delete ticker'
                    icon={<DeleteIcon />}
                    onClick={() => handleDeleteTicker(id)}
                  />
                </Td>
              </Tr>
            )
          }   
          return null;  
        })
        }
      </TickerlistParent>
    </Box>
  )
};

export default Tickerlist;
