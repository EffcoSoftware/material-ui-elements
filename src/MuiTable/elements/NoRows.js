import React from 'react'
import { TableRow, TableCell } from 'material-ui'

export default ({
  text = 'Brak rekordów o podanych parametrach...',
  multiSelect = false
}) => (
  <TableRow>
    {multiSelect ? <TableCell dense checkbox /> : null}
    <TableCell dense>{text}</TableCell>
  </TableRow>
)
