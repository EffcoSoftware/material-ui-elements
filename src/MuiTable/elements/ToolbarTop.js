import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Menu, { MenuItem } from 'material-ui/Menu'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import Search from './Search'
import Typography from 'material-ui/Typography'

const TopToolbar = props => {
  const { title, topComponent } = props
  return (
    <Toolbar>
      <Typography type="title">
        {title}
      </Typography>
      <div style={{ flex: 1 }} />
      {topComponent && topComponent}
      <div style={{ margin: 12 }} />
      <Search {...props} />
    </Toolbar>
  )
}

export default TopToolbar
