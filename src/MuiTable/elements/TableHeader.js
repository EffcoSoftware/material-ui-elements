import React from 'react'
import { TableRow, TableCell, TableSortLabel } from 'material-ui/Table'

const TableHeader = ({
  columns,
  orderBy,
  order,
  handleSort,
  fieldArray,
  rowActions,
  disabled,
  add,
  hideEditButtons
}) => {
  if (!columns) return null
  return (
    <TableRow>
      {columns.map((h, i) => {
        if (h.hidden) return null
        return (
          <TableCell
            key={i}
            numeric={h.numeric}
            padding={h.padding || 'dense'}
            style={h.cellStyle}
          >
            {orderBy && fieldArray !== true ? (
              <TableSortLabel
                onClick={() => handleSort(h.name)}
                active={h.name === orderBy}
                direction={order}
              >
                {h.label}
              </TableSortLabel>
            ) : (
              h.label
            )}
          </TableCell>
        )
      })}
      {fieldArray && <TableCell style={{ width: 10 }} padding="none" />}
    </TableRow>
  )
}

export default TableHeader
