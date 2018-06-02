import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableSortLabel from '@material-ui/core/TableSortLabel'

const TableHeader = ({
  columns,
  orderBy,
  order,
  handleSort,
  fieldArray,
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
            padding={h.padding}
            style={h.style}
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
      {fieldArray && !(!add && disabled) && !hideEditButtons ? (
        <TableCell style={{ width: 1 }} padding="dense" />
      ) : null}
    </TableRow>
  )
}

export default TableHeader
