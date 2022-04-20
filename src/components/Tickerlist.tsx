import React, { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import { Tr, Td } from '@chakra-ui/react';
import TickerlistParent from './TickerlistTable';


const Tickerlist = (): ReactElement => (
  <Box w='100%' py={8}>
    <TickerlistParent>
      <Tr>
          <Td>TSLA</Td>
          <Td>Tesla</Td>
          <Td isNumeric>977.20</Td>
          <Td isNumeric>977.20</Td>
          <Td isNumeric>977.20</Td>
        </Tr>
        <Tr>
          <Td>FB</Td>
          <Td>Meta Platforms, Inc.</Td>
          <Td isNumeric>200.42</Td>
          <Td isNumeric>200.42</Td>
          <Td isNumeric>200.42</Td>
        </Tr>
    </TickerlistParent>
  </Box>
);

export default Tickerlist;
