import React from 'react'
import { TableRow, TableCell } from 'material-ui'

export default ({
  text = 'Brak rekordów o podanych parametrach...',
  multiSelect = false
}) =>
  <TableRow>
    {multiSelect ? <TableCell compact checkbox /> : null}
    <TableCell compact>
      {text}
    </TableCell>
  </TableRow>
