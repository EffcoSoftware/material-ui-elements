import React from 'react'
import _ from 'lodash'
// import MuiTextField from '../../MuiTextfield'
import Menu, { MenuItem } from 'material-ui/Menu'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import Divider from 'material-ui/Divider'
import SelectedIcon from 'material-ui-icons/Done'

const ITEM_HEIGHT = 48
const ITEM_ROWS = 8.5
const MENU_WIDTH = 200
const MENU_ZINDEX = 6000

const OptionsMenu = props => {
  const {
    menuOptionsConfig,
    handleOptionsClick,
    handleOptionsOpen,
    handleOptionsRequestClose,
    optionsOpen,
    optionsAnchorEl,
    filters
  } = props
  if (!menuOptionsConfig) return null
  // console.log(menuOptionsConfig)
  const { style, filters: filterBy } = menuOptionsConfig
  console.log(filters)

  const maxHeight =
    style && style.rowHeight && style.rows
      ? style.rowHeight * style.rows
      : undefined

  return (
    <div>
      <IconButton
        aria-label="More"
        aria-owns="vertmenu" //aria-owns={optionsOpen ? 'long-menu' : null}
        aria-haspopup="true"
        onClick={handleOptionsOpen}
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
            maxHeight: maxHeight || ITEM_HEIGHT * ITEM_ROWS,
            width: (style && style.width) || MENU_WIDTH
          }
        }}
        style={{
          zIndex: (style && style.zIndex) || MENU_ZINDEX
        }}
      >
        {filterBy.map((filter, index) => {
          const options = filter.options
          return (
            <div>
              <Divider style={{ display: index === 0 ? 'none' : '' }} />

              <MenuItem
                key={0}
                //selected={_.includes(options.selected, 0)}
                style={{ width: '100%' }}
                onClick={() =>
                  handleOptionsClick(
                    {
                      name: filter.name,
                      id: 0
                    },
                    'filter'
                  )}
              >
                {'All'}
              </MenuItem>

              {options.map(option => {
                return (
                  <div>
                    <MenuItem
                      key={option.id}
                      //selected={_.findIndex(filters, option) >= 0}
                      style={{ width: '100%' }}
                      onClick={() =>
                        handleOptionsClick(
                          {
                            name: filter.name,
                            id: option.id
                          },
                          'filter'
                        )}
                    >
                      {option.label}
                    </MenuItem>
                  </div>
                )
              })}
            </div>
          )
        })}
      </Menu>
    </div>
  )
}

export default OptionsMenu
