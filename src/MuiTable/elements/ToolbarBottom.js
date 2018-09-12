import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import ButtonAdd from './ButtonAdd'
import * as helpers from '../../helpers'

const BottomToolbar = props => {
  const { data, lang, rowCount, filteredData } = props
  const allRows = (data || []).length
  const visibleRows = (filteredData || []).length
  console.log(props)

  const rowCountText =
    lang === 'pl'
      ? `Wyświetlono ${helpers.editingWording(
          visibleRows,
          'rekord',
          '',
          'ów',
          'y'
        )}${allRows !== visibleRows ? ' (filtered)' : ''}`
      : `Displaying ${helpers.editingWording(
          visibleRows,
          'row',
          '',
          's',
          's',
          's'
        )}${allRows !== visibleRows ? ' (filtered)' : ''}`

  const rowCountDisplay =
    rowCount === false ? null : <Typography>{rowCountText}</Typography>
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
