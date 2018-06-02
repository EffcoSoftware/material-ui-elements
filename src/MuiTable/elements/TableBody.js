import React from 'react'
import TableBody from '@material-ui/core/TableBody'
import MuiTableRow from './TableRow'

const Body = props => {
  const { data, ...rest } = props
  const tableData = props.fieldArray ? props.fields.getAll() : data
  return (
    <TableBody>
      {tableData.map((row, i) => (
        <MuiTableRow
          key={i}
          index={i}
          row={row}
          hover
          onRowClick={
            props.handleRowClick ? () => props.handleRowClick(row.id) : null
          }
          {...rest}
          data={tableData}
        />
      ))}
    </TableBody>
  )
}

export default Body
