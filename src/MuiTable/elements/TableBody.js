import React from 'react'
import { TableBody, TableRow, TableCell } from 'material-ui/Table'
import MuiTableRow from './TableRow'

const Body = props => {
  const { data, fields, handleRowClick, fieldArray, colSpan } = props

  if (!data) return null

  const tableData = fieldArray ? fields : data

  return (
    <TableBody>
      {tableData.map((row, i) => {
        console.log(data[i])
        return !colSpan || (data[i] && data[i].accessories.length === 0) ? (
          <MuiTableRow
            key={i}
            index={i}
            row={row}
            hover
            onRowClick={handleRowClick ? () => handleRowClick(row.id) : null}
            {...props}
          />
        ) : (
          <TableRow style={{ background: '#eee' }}>
            <TableCell key={i} colSpan={12}>
              adadd
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default Body
