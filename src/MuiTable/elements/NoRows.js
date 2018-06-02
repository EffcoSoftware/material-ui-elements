import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export default ({
  text = 'Brak rekordów o podanych parametrach...',
  multiSelect = false
}) => (
  <TableRow>
    {multiSelect ? <TableCell dense checkbox /> : null}
    <TableCell dense>{text}</TableCell>
  </TableRow>
)
