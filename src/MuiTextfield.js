import React from 'react'
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { InputAdornment } from 'material-ui/Input'

const MuiTextfield = props => {
  const {
    input,
    meta,
    disabled,
    label,
    rows,
    startAdo,
    endAdo,
    floatingLabelStyle
  } = props
  return (
    <FormControl
      margin="normal"
      error={!!(meta && meta.error)}
      multiLine={!!rows}
      rows={rows}
      fullWidth
      disabled={disabled}
    >
      <InputLabel style={floatingLabelStyle} shrink>
        {label}
      </InputLabel>
      <Input
        {...input}
        style={{ fontSize: '0.8rem', color: '#666', borderColor: '#ccc' }}
        startAdornment={
          startAdo && (
            <InputAdornment position="start">{startAdo}</InputAdornment>
          )
        }
        endAdornment={
          endAdo && <InputAdornment position="end">{endAdo}</InputAdornment>
        }
      />
      <FormHelperText>
        {meta && meta.touched && meta.error && meta.error}
      </FormHelperText>
    </FormControl>
  )
}

export default MuiTextfield
