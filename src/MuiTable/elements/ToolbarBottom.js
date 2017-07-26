import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import * as helpers from '../../helpers'

const BottomToolbar = props => {
  const rows = props.data ? props.data.length : 0

  const rowCountText =
    props.lang === 'pl'
      ? `Wyświetlono ${helpers.editingWording(rows, 'rekord', '', 'ów', 'y')} `
      : `Displaying ${helpers.editingWording(rows, 'row', '', 's')}`

  const rowCountDisplay =
    props.rowCount === false
      ? null
      : <Typography>
          {rowCountText}
        </Typography>
  return (
    <div>
      <Divider />
      <Toolbar>
        <div style={{ flex: 1 }} />
        {rowCountDisplay}
      </Toolbar>
    </div>
  )
}

export default BottomToolbar
