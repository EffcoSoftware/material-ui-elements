import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Menu, { MenuItem } from 'material-ui/Menu'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import Search from './Search'

import Typography from 'material-ui/Typography'

const TopToolbar = ({ title, config }) => {
  if (config === false) return null

  return (
    <Toolbar>
      <Typography type="title">{title}</Typography>
      <div style={{ flex: 1 }} />
      <Search {...config} />
      <IconButton
        aria-owns="vertmenu"
        aria-haspopup="true"
        onClick={config.toggleMenu}
      >
        <Icon>more_vert</Icon>
      </IconButton>
      <Menu
        onRequestClose={config.toggleMenu}
        id="vertmenu"
        anchorEl={config.anchorEl}
        open={config.open}
      >
        <MenuItem
          selected={config.view === 20}
          onClick={() => config.handleClick(20)}
        >
          In Progress
        </MenuItem>
        <MenuItem
          selected={config.view === 30}
          onClick={() => config.handleClick(30)}
        >
          Cancelled
        </MenuItem>
        <MenuItem
          selected={config.view === 40}
          onClick={() => config.handleClick(40)}
        >
          Completed
        </MenuItem>
      </Menu>
    </Toolbar>
  )
}

export default TopToolbar
