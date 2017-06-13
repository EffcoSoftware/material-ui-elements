import React from 'react'
import _ from 'lodash'
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
      hover={hover}
      selected={row.id === selected}
      onClick={() => onRowClick(row.id)}
    >
      {header.map((h, i) => {
        const value = _.get(row, h.name)
        return (
          <TableCell
            key={i}
            numeric={h.numeric}
            compact={h.compact}
            disablePadding={h.disablePadding}
            style={h.style}
          >
            {h.component ? h.component(value) : value}
          </TableCell>
        )
      })}
    </TableRow>
  )
}

export default MuiTableRow
