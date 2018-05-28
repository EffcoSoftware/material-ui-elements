import React from 'react'
import Select from 'material-ui/Select'
import _c from 'lodash-checkit'
import { InputLabel } from 'material-ui/Input'
import Checkbox from 'material-ui/Checkbox'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { MenuItem } from 'material-ui/Menu'
import { controlStyle } from './constants'

const MuiSelectfield = props => {
  const {
    options,
    input,
    disabled,
    label,
    meta,
    hint,
    floatingLabelStyle,
    multiple,
    customRenderValue,
    onChange: onChangeFromField,
    style,
    value,
    required,
    margin
  } = props

  const inputValue = input && input.value !== undefined ? input.value : value
  const renderValue = (v = multiple ? [] : '') =>
    multiple ? customRenderValue || v.join(', ') : v

  const handleMultipleChange = (existingValues, newValue) => {
    const values = existingValues.slice()
    if (values.includes(newValue)) {
      values.splice(values.indexOf(newValue), 1)
      return values
    }
    values.push(newValue)
    return values
  }

  return (
    <FormControl
      margin={margin || 'normal'}
      fullWidth
      multiple={multiple}
      required={required}
      error={!!(meta && meta.touched && meta.error)}
      disabled={disabled}
    >
      <InputLabel style={floatingLabelStyle} shrink>
        {label}
      </InputLabel>
      <Select
        value={inputValue}
        renderValue={multiple && renderValue}
        inputProps={{ placeholder: hint }}
        onChange={e => {
          input &&
            input.onChange(
              multiple
                ? handleMultipleChange(inputValue, e.target.value)
                : e.target.value
            )
          if (onChangeFromField) {
            onChangeFromField(
              multiple
                ? handleMultipleChange(inputValue, e.target.value)
                : e.target.value
            )
          }
        }}
        MenuProps={{
          PaperProps: {
            style: {
              transform: 'translate3d(0, 0, 0)'
            }
          }
        }}
        style={{ ...controlStyle, ...style }}
      >
        {options
          ? options.map(o => {
              const key = o.key || o.value || o
              const value = _c.isExists(o.value) ? o.value : o
              const label = o.label || o
              const isSelected = multiple
                ? inputValue.includes(value)
                : inputValue === value
              const style = isSelected ? { fontWeight: '600' } : {}
              return (
                <MenuItem style={style} key={key} value={value}>
                  {multiple && (
                    <Checkbox color="primary" checked={isSelected} />
                  )}
                  {label}
                </MenuItem>
              )
            })
          : null}
      </Select>
      <FormHelperText>
        {meta && meta.touched && meta.error && meta.error}
      </FormHelperText>
    </FormControl>
  )
}

export default MuiSelectfield
