import React from 'react'
import Toolbar from 'material-ui/Toolbar'

import Typography from 'material-ui/Typography'

const TopToolbar = ({ title, config }) => {
  if (!config) return null

  return (
    <Toolbar>
      <Typography type="title">{title}</Typography>
      <div style={{ flex: 1 }} />
    </Toolbar>
  )
}

export default TopToolbar
