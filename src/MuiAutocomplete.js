import React from 'react'
import _ from 'lodash'
import SuperSelectField from 'material-ui-superselectfield-effco'

const MuiAutocomplete = props => {
  const {
    options,
    input,
    hintText,
    floatingLabelText,
    meta,
    disabled,
    style,
    required,
    multiple,
    onChange,
    showAutocompleteThreshold
  } = props

  return (
    <SuperSelectField
      disabled={disabled}
      style={style}
      {...input}
      value={_.find(options, { value: input.value })}
      onChange={v => input.onChange(v ? v.value || v : v) || onChange}
      showAutocompleteThreshold={showAutocompleteThreshold}
      hintText={hintText || ''}
      floatingLabelText={
        floatingLabelText ? `${floatingLabelText}${required ? ' *' : ''}` : ''
      }
      errorText={meta ? meta.touched && meta.error && meta.error : null}
      underlineDisabledStyle={{ borderColor: '#ccc' }}
      hintStyle={{ color: '#aaa' }}
      floatingLabelFixed
      multiple={multiple}
    >
      {options
        ? options.map(o =>
            <div
              key={[false, 0].includes(o.value) ? o.value : o.value || o}
              label={o.label || o}
              value={[false, 0].includes(o.value) ? o.value : o.value || o}
            >
              {o.label || o}
            </div>
          )
        : null}
    </SuperSelectField>
  )
}

export default MuiAutocomplete
