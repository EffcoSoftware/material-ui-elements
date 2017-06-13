import React from 'react'
import { SelectField, MenuItem } from 'material-ui-effco'

export default ({
  disabled,
  style,
  hintText,
  floatingLabelText,
  options,
  onChange,
  multiple,
  required,
  input,
  meta
}) => {
  return (
    <SelectField
      {...input}
      onChange={(e, i, v) => input.onChange(v)}
      hintText={hintText}
      floatingLabelText={`${floatingLabelText}${required ? ' *' : ''}`}
      fullWidth
      errorText={meta ? meta.touched && meta.error && meta.error : null}
      disabled={disabled}
      style={style}
      underlineDisabledStyle={{ borderColor: '#ccc' }}
      hintStyle={{ color: '#aaa' }}
      floatingLabelFixed
      multiple={multiple}
    >
      {options
        ? options.map(o =>
            <MenuItem
              key={o.value || o}
              value={o.value || o}
              primaryText={o.label || o}
            />
          )
        : null}

    </SelectField>
  )
}
