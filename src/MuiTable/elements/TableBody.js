import React from 'react'
import { TableBody } from 'material-ui/Table'
import MuiTableRow from './TableRow'
import NoRows from './NoRows'

const Body = props => {
  const { data, fields, handleRowClick, fieldArray } = props

  if (!data) return <NoRows />

  const tableData = fieldArray ? fields : data

  return (
    <TableBody>
      {tableData.map((row, i) =>
        <MuiTableRow
          key={i}
          index={i}
          row={row}
          hover
          onRowClick={handleRowClick ? () => handleRowClick(row.id) : null}
          {...props}
        />
      )}
    </TableBody>
  )
}

export default Body
