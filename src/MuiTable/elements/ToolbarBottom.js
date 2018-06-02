import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ButtonAdd from './ButtonAdd'
import * as helpers from '../../helpers'

const BottomToolbar = props => {
  const { data, lang, rowCount, fieldArray, fields } = props
  const rows = fieldArray ? fields.length : data ? data.length : 0

  const rowCountText =
    lang === 'pl'
      ? `Wyświetlono ${helpers.editingWording(rows, 'rekord', '', 'ów', 'y')} `
      : `Displaying ${helpers.editingWording(rows, 'row', '', 's', 's', 's')}`

  const rowCountDisplay =
    rowCount === false ? null : (
      <Typography variant="caption">{rowCountText}</Typography>
    )
  return (
    <div>
      <Toolbar>
        <ButtonAdd {...props} />
        <div style={{ flex: 1 }} />
        {rowCountDisplay}
      </Toolbar>
    </div>
  )
}

export default BottomToolbar
