import React from 'react'
import _ from 'lodash'
import { withStyles } from 'material-ui/styles'
import MuiTextfield from './MuiTextfield'
import Paper from 'material-ui/Paper'
import { MenuItem } from 'material-ui/Menu'
import Downshift from 'downshift'

const renderInput = props => <MuiTextfield {...props} />

const renderSuggestion = params => {
  const {
    suggestion,
    index,
    itemProps,
    highlightedIndex,
    selectedItem
  } = params
  const isHighlighted = highlightedIndex === index
  const isSelected = selectedItem === suggestion.value

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.value}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {suggestion.label}
    </MenuItem>
  )
}

const getSuggestions = (inputValue, options = []) => {
  let count = 0
  console.log(options)
  return options.filter(o => {
    const keep =
      (!inputValue ||
        o.label.toLowerCase().includes(inputValue.toLowerCase())) &&
      count < 5

    if (keep) {
      count += 1
    }
    return keep
  })
}

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 250,
    width: 200
  },
  paper: {
    position: 'fixed',
    zIndex: 2,
    marginTop: -20,
    width: 'inherit'
    // left: 0,
    // right: 0
  }
})

const IntegrationDownshift = props => {
  const { classes, options } = props
  console.log(props)
  return (
    <Downshift>
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex
      }) => (
        <div>
          {renderInput({
            ...props,
            InputProps: getInputProps({
              id: 'integration-downshift',
              value:
                _.find(options, { value: selectedItem }) &&
                _.find(options, { value: selectedItem }).label
            })
          })}
          {isOpen ? (
            <Paper className={classes.paper}>
              {getSuggestions(inputValue, options).map((suggestion, index) =>
                renderSuggestion({
                  suggestion,
                  index,
                  itemProps: getItemProps({ item: suggestion.value }),
                  highlightedIndex,
                  selectedItem
                })
              )}
            </Paper>
          ) : null}
        </div>
      )}
    </Downshift>
  )
}

export default withStyles(styles)(IntegrationDownshift)
