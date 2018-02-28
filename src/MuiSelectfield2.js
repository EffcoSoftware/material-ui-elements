import React from 'react'
import Select from 'material-ui/Select'
import { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { MenuItem } from 'material-ui/Menu'

const MuiSelectfield = props => {
  const { options, input, disabled, label, meta, floatingLabelStyle } = props
  return (
    <FormControl
      autoWidth
      margin="normal"
      fullWidth
      error={!!(meta && meta.error)}
      disabled={disabled}
    >
      <InputLabel style={floatingLabelStyle} shrink>
        {label}
      </InputLabel>
      <Select
        {...input}
        style={{ fontSize: '0.8rem', color: '#666', borderColor: '#ccc' }}
        errorText={meta && meta.touched && meta.error && meta.error}
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
