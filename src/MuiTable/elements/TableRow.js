import React from 'react'
import _ from 'lodash'
import { TableRow, TableCell } from 'material-ui/Table'
import Typography from 'material-ui/Typography'

const MuiTableRow = ({ selected, hover, row, onRowClick, header }) => {
  return (
    <TableRow
      hover={hover}
      selected={row.id === selected}
      onClick={() => onRowClick(row.id)}
      style={{ cursor: 'pointer' }}
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
            {h.component
              ? h.component(value)
              : <Typography>
                  {value}
                </Typography>}
          </TableCell>
        )
      })}
    </TableRow>
  )
}

export default MuiTableRow
