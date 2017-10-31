import React from 'react'
import _ from 'lodash'
import MuiTextField from '../../MuiTextfield'
import Menu, { MenuItem } from 'material-ui/Menu'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import Divider from 'material-ui/Divider'

const ITEM_HEIGHT = 48

const OptionsMenu = props => {
  const {
    menuOptionsConfig,
    handleOptionsClick,
    handleOptionsRequestClose,
    optionsOpen,
    optionsAnchorEl
  } = props
  if (!menuOptionsConfig) return null
  console.log(menuOptionsConfig)
  const { filters } = menuOptionsConfig
  return (
    <div>
      <IconButton
        aria-label="More"
        aria-owns="vertmenu" //aria-owns={optionsOpen ? 'long-menu' : null}
        aria-haspopup="true"
        onClick={handleOptionsClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="vertmenu"
        anchorEl={optionsAnchorEl}
        open={optionsOpen}
        onRequestClose={() => handleOptionsRequestClose()}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 8.5,
            width: 200
          }
        }}
        style={{
          zIndex: 6000
        }}
      >
        {filters.map(filter => {
          const options = filter.options
          return options.map(option => {
            return (
              <MenuItem
                key={option.id}
                selected={_.includes(options.selected, option.id)}
                onClick={() => handleOptionsRequestClose(option.id)}
              >
                {option.label}
              </MenuItem>
            )
          })
        })}
      </Menu>
    </div>
  )
}

export default OptionsMenu
