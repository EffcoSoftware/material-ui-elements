import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Search from './Search'
import Typography from 'material-ui/Typography'
import OptionsMenu from './OptionsMenu'

const TopToolbar = props => {
  const { title, topComponent, style, toolbarStyle } = props

  return (
    <Toolbar style={{ ...toolbarStyle }}>
      <Typography type="title" style={{ ...style }}>
        {title}
      </Typography>
      <div style={{ flex: 1 }} />
      {topComponent && topComponent}
      <div style={{ margin: 12 }} />
      <Search {...props} />
      <OptionsMenu {...props} />
    </Toolbar>
  )
}

export default TopToolbar
