import React from 'react'
import { TextField } from 'material-ui-effco'

export default props => {
  const {
    disabled,
    style,
    hint,
    label,
    rows,
    type,
    underlineShow,
    underlineDisabledStyle,
    required,
    onChange,
    input,
    meta,
    value,
    numeric,
    inputStyle,
    hideLabel = false
  } = props

  return (
    <div>
      <TextField
        value={value}
        {...input}
        hintText={hint}
        // onChange={input ? input.onChange : onChange}
        floatingLabelText={
          !hideLabel && label ? `${label}${required ? ' *' : ''}` : ''
        }
        disabled={disabled}
        fullWidth
        multiLine={!!rows}
        rows={rows}
        errorText={meta ? meta.touched && meta.error && meta.error : ''}
        underlineShow={underlineShow}
        underlineDisabledStyle={
          underlineDisabledStyle || { borderColor: '#ccc' }
        }
        hintStyle={{ color: '#aaa' }}
        floatingLabelFixed
        type={type}
        style={style}
        inputStyle={{
          ...inputStyle,
          ...(numeric ? { textAlign: 'right' } : {})
        }}
      />
    </div>
  )
}
