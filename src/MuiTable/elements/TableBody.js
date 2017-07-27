import React from 'react'
import { TableBody } from 'material-ui/Table'
import MuiTableRow from './TableRow'
import NoRows from './NoRows'

const Body = props => {
  const { data, handleRowClick } = props

  if (!data) return <NoRows />
  return (
    <TableBody>
      {data.map((row, i) =>
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
