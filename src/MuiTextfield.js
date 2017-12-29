import React from 'react'
import { TextField } from 'material-ui-effco'

export default props => {
  const {
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
    meta,
    value,
    numeric,
    inputStyle
  } = props
  return (
    <div>
      <TextField
        value={value}
        {...input}
        hintText={hintText}
        // onChange={v =>
        //   (input && input.onChange(v ? v.value || v : v)) ||
        //   (onChange ? onChange(v) : () => null)
        // }
        onChange={input ? input.onChange : onChange}
        floatingLabelText={
          floatingLabelText ? `${floatingLabelText}${required ? ' *' : ''}` : ''
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
