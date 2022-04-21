import React, { ReactElement, ReactNode } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react';

interface TickerTableProps {
  children: ReactNode;
}

const TickerlistTable = ({ children }: TickerTableProps): ReactElement => (
  <TableContainer>
    <Table variant='striped'>
      <Thead>
        <Tr>
          <Th>Ticker</Th>
          <Th>Name</Th>
          <Th isNumeric>Current Price</Th>
          <Th isNumeric>Previous Day Open Price</Th>
          <Th isNumeric>Previous Day Close Price</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {children}
      </Tbody>
    </Table>
  </TableContainer>
);

export default TickerlistTable;
