import React, { Component } from 'react'
import MuiDownshift from 'mui-downshift'
import _ from 'lodash'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import ListItem from '@material-ui/core/ListItem'
import { controlStyle } from './constants'

export default class MuiAutocomplete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredItems: props.options.map(o => ({ ...o, text: o.label }))
    }
  }

  handleStateChange = changes => {
    if (typeof changes.inputValue === 'string') {
      const filteredItems = this.props.options.filter(item =>
        (item.text || item.label || '')
          .toLowerCase()
          .includes(changes.inputValue.toLowerCase())
      )
      this.setState({ filteredItems })
    }
  }

  render() {
    const { filteredItems } = this.state
    const {
      input,
      meta,
      required,
      disabled,
      margin,
      label,
      floatingLabelStyle,
      onChange: onChangeFromField,
      style,
      customItem,
      value,
      hideLabel
    } = this.props

    const inputValue = (input && input.value) || value

    return (
      <FormControl
        margin={margin || 'normal'}
        fullWidth
        required={required}
        error={!!(meta && meta.error)}
        disabled={disabled}
      >
        {!hideLabel && (
          <InputLabel style={floatingLabelStyle} shrink>
            {label}
          </InputLabel>
        )}
        <MuiDownshift
          getInputProps={() => ({
            disabled,
            error: !!(meta && meta.error),
            label: label,
            labelProps: {
              error: !!(meta && meta.error),
              style: { floatingLabelStyle },
              shrink: true,
              required
            },
            style: { ...controlStyle, ...style }
          })}
          margin={margin || 'normal'}
          items={filteredItems}
          showEmpty
          onChange={selection => {
            input && input.onChange(selection ? selection.value : null)
            if (onChangeFromField) {
              onChangeFromField(selection ? selection.value : null)
            }
          }}
          onStateChange={this.handleStateChange}
          selectedItem={_.find(this.props.options, { value: inputValue })}
          {...this.props}
          getListItem={
            customItem &&
            (({ getItemProps, item }) => (
              <ListItem button {...getItemProps()}>
                {customItem(item)}
              </ListItem>
            ))
          }
        />
        <FormHelperText>{meta && meta.error && meta.error}</FormHelperText>
      </FormControl>
    )
  }
}
