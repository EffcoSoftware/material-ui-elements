import React from 'react'
import { TextField } from 'material-ui'

export default ({
  field,
  value,
  disabled,
  style,
  placeholder,
  label,
  error,
  rows,
  type,
  underlineShow,
  underlineDisabledStyle
}) => (
  <div style={{ margin: 10 }}>
    <TextField
      {...field}
      value={field ? field.value : value}
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      rows={rows}
      error={error}
      type={type}
    />
  </div>
)
