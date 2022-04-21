import React, { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import { Tr, Td } from '@chakra-ui/react';
import TickerlistParent from './TickerlistTable';
import TickerItem from '../interfaces/TickerItem.interface';


const Tickerlist = ({ items }: any): ReactElement => (
  <Box w='100%' py={8}>
    <TickerlistParent>
      { items.length > 0 && items.map((item: TickerItem, id: number) => (
          <Tr key={id}>
            <Td>{item.ticker}</Td>
            <Td>{item.name}</Td>
            <Td isNumeric>977.20</Td>
            <Td isNumeric>{item.openPrice}</Td>
            <Td isNumeric>{item.closePrice}</Td>
          </Tr>
        ))
      }
    </TickerlistParent>
  </Box>
);

export default Tickerlist;
