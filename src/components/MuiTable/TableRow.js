import React from 'react'
import { TableRow, TableCell } from 'material-ui/Table'

const MuiTableRow = ({
  selected,
  hover,
  row,
  onRowClick,
  config: { header }
}) => {
  return (
    <TableRow
      hover={hover || true}
      selected={row.id === selected}
      onClick={() => onRowClick(row.id)}
    >
      {header.map((h, i) => (
        <TableCell
          key={i}
          numeric={h.numeric}
          compact={h.compact}
          disablePadding={h.disablePadding}
        >
          {row[h.name]}
        </TableCell>
      ))}
    </TableRow>
  )
}

export default MuiTableRow
