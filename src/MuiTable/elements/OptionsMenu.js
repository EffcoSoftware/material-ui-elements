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

  const { style, filters: filterBy } = menuOptionsConfig

  const maxHeight =
    style && style.rowHeight && style.rows
      ? style.rowHeight * style.rows
      : undefined
  return (
    <div>
      <IconButton
        aria-label="More"
        aria-owns="vertmenu"
        aria-haspopup="true"
        onClick={handleOptionsOpen}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="vertmenu"
        anchorEl={optionsAnchorEl}
        open={optionsOpen}
        onClose={() => handleOptionsRequestClose()}
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
          const selectedAll =
            _.findIndex(filters, {
              value: 0,
              name: filter.name
            }) >= 0
          return (
            <div key={index}>
              <Divider style={{ display: index === 0 ? 'none' : '' }} />
              <div style={{ display: 'flex' }}>
                <SelectedIcon
                  style={{
                    marginTop: 10,
                    marginRight: 5,
                    marginLeft: 8,
                    //display: selectedAll ? '' : 'none'
                    visibility: selectedAll ? 'visible' : 'hidden'
                  }}
                />
                <MenuItem
                  key={0}
                  //selected={selectedAll}
                  style={{ width: '100%' }}
                  onClick={() =>
                    menuOptionsConfig && menuOptionsConfig.handleClick
                      ? menuOptionsConfig.handleClick({
                          name: filter.name,
                          value: 0
                        })
                      : handleOptionsClick(
                          {
                            name: filter.name,
                            value: 0
                          },
                          'filter'
                        )
                  }
                >
                  {'All'}
                </MenuItem>
              </div>
              {options.map((option, index) => {
                const selectedOption =
                  _.findIndex(filters, {
                    value: option.id,
                    name: filter.name
                  }) >= 0
                return (
                  <div key={index} style={{ display: 'flex' }}>
                    <SelectedIcon
                      style={{
                        marginTop: 10,
                        marginRight: 5,
                        marginLeft: 8,
                        //display: selectedOption ? '' : 'none'
                        visibility: selectedOption ? 'visible' : 'hidden'
                      }}
                    />
                    <MenuItem
                      key={option.id}
                      //selected={selectedOption}
                      style={{ width: '100%' }}
                      onClick={() =>
                        menuOptionsConfig && menuOptionsConfig.handleClick
                          ? menuOptionsConfig.handleClick({
                              name: filter.name,
                              value: option.id
                            })
                          : handleOptionsClick(
                              {
                                name: filter.name,
                                value: option.id
                              },
                              'filter'
                            )
                      }
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
