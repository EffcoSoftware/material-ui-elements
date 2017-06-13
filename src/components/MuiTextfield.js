import React from 'react'
import { TextField } from 'material-ui-effco'

export default ({
  disabled,
  style,
  hintText,
  floatingLabelText,
  rows,
  type,
  underlineShow,
  underlineDisabledStyle,
  required,
  onChange,
  input,
  meta
}) =>
  <div>
    <TextField
      {...input}
      hintText={hintText}
      floatingLabelText={
        floatingLabelText ? `${floatingLabelText}${required ? ' *' : ''}` : null
      }
      disabled={disabled}
      fullWidth
      multiLine={!!rows}
      rows={rows}
      errorText={meta ? meta.touched && meta.error && meta.error : null}
      underlineShow={underlineShow}
      underlineDisabledStyle={underlineDisabledStyle || { borderColor: '#ccc' }}
      hintStyle={{ color: '#aaa' }}
      floatingLabelFixed
      type={type}
      style={style}
    />
  </div>
