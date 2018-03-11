import React from 'react'
import { withStyles } from 'material-ui/styles'
import MuiTextfield from './MuiTextfield'
import Paper from 'material-ui/Paper'
import { MenuItem } from 'material-ui/Menu'
import Downshift from 'downshift'

const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' }
]

const renderInput = props => {
  console.log(props)

  return <MuiTextfield {...props} />
}

const renderSuggestion = params => {
  const {
    suggestion,
    index,
    itemProps,
    highlightedIndex,
    selectedItem
  } = params
  const isHighlighted = highlightedIndex === index
  const isSelected = selectedItem === suggestion.label

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
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

const getSuggestions = inputValue => {
  let count = 0

  return suggestions.filter(suggestion => {
    const keep =
      (!inputValue ||
        suggestion.label.toLowerCase().includes(inputValue.toLowerCase())) &&
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
    position: 'absolute',
    zIndex: 2,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  }
})

const IntegrationDownshift = props => {
  const { classes } = props

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
              id: 'integration-downshift'
            })
          })}
          {isOpen ? (
            <Paper className={classes.paper} square>
              {getSuggestions(inputValue).map((suggestion, index) =>
                renderSuggestion({
                  suggestion,
                  index,
                  itemProps: getItemProps({ item: suggestion.label }),
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
