import React from 'react'
import { TableRow, TableCell, TableSortLabel } from 'material-ui/Table'

const TableHeader = ({ header, orderBy, order, handleSort }) => {
  if (!header) return null
  return (
    <TableRow>
      {header.map((h, i) =>
        <TableCell
          key={i}
          numeric={h.numeric}
          compact={h.compact}
          disablePadding={h.disablePadding}
          style={h.style}
        >
          <TableSortLabel
            onClick={() => handleSort(h.name)}
            active={h.name === orderBy}
            direction={order}
          >
            {h.label}
          </TableSortLabel>
        </TableCell>
      )}
    </TableRow>
  )
}

export default TableHeader
