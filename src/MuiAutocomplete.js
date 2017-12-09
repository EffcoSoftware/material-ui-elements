import React from 'react'
import _ from 'lodash'
import SuperSelectField from 'material-ui-superselectfield-effco'

const MuiAutocomplete = props => {
  const {
    options,
    input,
    hintText,
    label,
    meta,
    disabled,
    style,
    required,
    multiple,
    onChange,
    showAutocompleteThreshold,
    value
  } = props

  return (
    <SuperSelectField
      disabled={disabled}
      style={style}
      {...input}
      value={_.find(options, { value: (input && input.value) || value })}
      onChange={v =>
        (input && input.onChange(v ? v.value || v : v)) ||
        (onChange ? onChange(v) : () => null)}
      showAutocompleteThreshold={showAutocompleteThreshold}
      hintText={hintText || ''}
      floatingLabel={label && `${label}${required ? ' *' : ''}`}
      errorText={meta ? meta.touched && meta.error && meta.error : null}
      underlineDisabledStyle={{ borderColor: '#ccc' }}
      hintStyle={{ color: '#aaa' }}
      floatingLabelFixed
      multiple={multiple}
    >
      {options ? (
        options.map(o => (
          <div
            key={[false, 0].includes(o.value) ? o.value : o.value || o}
            label={o.label || o}
            value={[false, 0].includes(o.value) ? o.value : o.value || o}
          >
            {o.label || o}
          </div>
        ))
      ) : null}
    </SuperSelectField>
  )
}

export default MuiAutocomplete
