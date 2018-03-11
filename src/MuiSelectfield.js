import React from 'react'
import Select from 'material-ui/Select'
import { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { MenuItem } from 'material-ui/Menu'
import { controlStyle } from './constants'

const MuiSelectfield = props => {
  const {
    options,
    input,
    disabled,
    label,
    meta,
    floatingLabelStyle,
    multiple,
    onChange: onChangeFromField,
    style
  } = props

  return (
    <FormControl
      margin="normal"
      fullWidth
      multiple={multiple}
      error={!!(meta && meta.error)}
      disabled={disabled}
    >
      <InputLabel style={floatingLabelStyle} shrink>
        {label}
      </InputLabel>
      <Select
        value={input && input.value}
        onChange={e => {
          input && input.onChange(e.target.value)
          if (onChangeFromField) {
            onChangeFromField(e.target.value)
          }
        }}
        style={{ ...controlStyle, ...style }}
      >
        {options
          ? options.map(o => (
              <MenuItem
                key={
                  o.key
                    ? o.key
                    : [false, 0].indexOf(o.value) > -1 ? o.value : o.value || o
                }
                value={
                  [false, 0].indexOf(o.value) > -1 ? o.value : o.value || o
                }
              >
                {o.label || o}
              </MenuItem>
            ))
          : null}
      </Select>
      <FormHelperText>
        {meta && meta.touched && meta.error && meta.error}
      </FormHelperText>
    </FormControl>
  )
}

export default MuiSelectfield
