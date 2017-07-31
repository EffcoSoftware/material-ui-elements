import React from 'react'
import { TableRow, TableCell, TableSortLabel } from 'material-ui/Table'

const TableHeader = ({
  columns,
  orderBy,
  order,
  handleSort,
  fieldArray,
  disabled
}) => {
  if (!columns) return null
  return (
    <TableRow>
      {columns.map((h, i) =>
        <TableCell
          key={i}
          numeric={h.numeric}
          compact={h.compact}
          disablePadding={h.disablePadding}
          style={h.style}
        >
          {orderBy && fieldArray !== true
            ? <TableSortLabel
                onClick={() => handleSort(h.name)}
                active={h.name === orderBy}
                direction={order}
              >
                {h.label}
              </TableSortLabel>
            : h.label}
        </TableCell>
      )}
      {fieldArray && !disabled
        ? <TableCell style={{ width: 1 }} compact disablePadding />
        : null}
    </TableRow>
  )
}

export default TableHeader
