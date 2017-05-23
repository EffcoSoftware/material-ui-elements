import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const TopToolbar = ({ title, config }) => {
  if (config === false) return null

  return (
    <Toolbar>
      <Typography type="title">{title}</Typography>
    </Toolbar>
  )
}

export default TopToolbar
