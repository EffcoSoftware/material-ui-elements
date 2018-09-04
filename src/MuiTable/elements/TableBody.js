import React from 'react'
import { TableBody, TableRow, TableCell } from 'material-ui/Table'
import MuiTableRow from './TableRow'

import { getDetails } from '../helpers'

const Body = props => {
  const {
    data,
    fields,
    handleRowClick,
    fieldArray,
    detailsRow,
    columns
  } = props

  const tableData = fieldArray ? fields : data
  return (
    <TableBody>
      {!detailsRow
        ? tableData.map((row, i) => (
            <MuiTableRow
              key={i}
              index={i}
              row={row}
              hover
              onRowClick={handleRowClick ? () => handleRowClick(row.id) : null}
              {...props}
            />
          ))
        : getDetails(data, detailsRow).map((row, i) => {
            return !row.detailRow ? (
              <MuiTableRow
                key={i}
                index={row.newOffsetIndex}
                row={row}
                hover
                onRowClick={
                  handleRowClick ? () => handleRowClick(row.id) : null
                }
                {...props}
              />
            ) : (
              <TableRow
                style={detailsRow.rowStyles && { ...detailsRow.rowStyles }}
              >
                <TableCell key={i} colSpan={columns.length + 1}>
                  {row.component}
                </TableCell>
              </TableRow>
            )
          })}
    </TableBody>
  )
}

export default Body
