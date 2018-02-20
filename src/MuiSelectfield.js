import React from 'react'
import { SelectField, MenuItem } from 'material-ui-effco'

export default props => {
  const {
    disabled,
    style,
    hint,
    label,
    options,
    multiple,
    required,
    input,
    meta,
    value,
    hideLabel,
    ...rest
  } = props

  return (
    <SelectField
      value={value}
      {...input}
      onChange={(e, i, v) => input.onChange(v)}
      hintText={hint}
      floatingLabelText={
        !hideLabel && label ? `${label}${required ? ' *' : ''}` : ''
      }
      floatingLabelStyle={
        input && input.floatingLabelStyle
          ? input.floatingLabelStyle
          : rest && rest.floatingLabelStyle
            ? rest.floatingLabelStyle
            : undefined
      }
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
        ? options.map(o => (
            <MenuItem
              style={input && input.menuItemStyle}
              key={
                o.key
                  ? o.key
                  : [false, 0].indexOf(o.value) > -1 ? o.value : o.value || o
              }
              value={[false, 0].indexOf(o.value) > -1 ? o.value : o.value || o}
              primaryText={o.label || o}
            />
          ))
        : null}
    </SelectField>
  )
}
