import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import * as helpers from '../helpers'

const BottomToolbar = ({ config, rows }) => {
  if (config === false) return null

  const toolbarConfig = {
    ...{ rowCount: true, visibleRows: 0, allRows: 0 },
    ...config,
    ...rows
  }

  const { rowCount, allRows } = toolbarConfig
  const rowCountText =
    config.lang === 'pl'
      ? `Wyświetlono ${helpers.editingWording(
          allRows,
          'rekord',
          '',
          'ów',
          'y'
        )} `
      : `Displaying ${helpers.editingWording(allRows, 'row', '', 's')}`

  const rowCountDisplay = rowCount
    ? <Typography>
        {rowCountText}
      </Typography>
    : null
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
