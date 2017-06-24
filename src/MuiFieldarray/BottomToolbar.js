import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import CrudButton from '../Button'

const BottomToolbar = ({ config, rows, actions }) => {
  if (!config) return null

  const toolbarConfig = {
    ...{ rowCount: true, visibleRows: 0, allRows: 0 },
    ...config,
    ...rows
  }

  const { rowCount, allRows } = toolbarConfig

  const rowCountDisplay = rowCount
    ? <Typography>{`Displaying ${allRows} rows`}</Typography>
    : null
  return (
    <div>
      {/*<Divider />*/}
      <Toolbar>
        {actions
          ? actions.map((b, i) =>
              <CrudButton
                key={i}
                action={b.action}
                raised={b.raised}
                label={b.label}
                disabled={b.disabled}
                icon={b.icon}
                style={{ ...b.style }}
                color={b.color}
                compact={actions.compact}
              />
            )
          : null}
        <div style={{ flex: 1 }} />
        {rowCountDisplay}
      </Toolbar>
    </div>
  )
}

export default BottomToolbar
