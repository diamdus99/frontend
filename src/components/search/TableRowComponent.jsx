import React from 'react';
import { TableRow, TableCell } from '@windmill/react-ui';
const TableRowComponent = (props) => {
  return (
    <TableRow>
      <TableCell>{props.name} </TableCell>
      <TableCell className="text-right">{props.value}</TableCell>
    </TableRow>
  );
};

export default TableRowComponent;
