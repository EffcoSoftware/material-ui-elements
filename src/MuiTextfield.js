import React from 'react'
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { InputAdornment } from 'material-ui/Input'
import { controlStyle } from './constants'

const MuiTextfield = props => {
  const {
    input,
    meta,
    disabled,
    label,
    hint,
    rows,
    startAdo,
    endAdo,
    floatingLabelStyle,
    style,
    InputProps,
    required,
    onChange: onChangeFromField,
    value,
    margin
  } = props

  return (
    <FormControl
      margin={margin || 'normal'}
      error={!!(meta && meta.touched && meta.error)}
      rows={rows}
      fullWidth
        errorText={meta ? meta.error && meta.touched && meta.error : ''}
      required={required}
      disabled={disabled}
    >
      <InputLabel style={floatingLabelStyle} shrink>
        {label}
      </InputLabel>
      <Input
        {...input}
        value={input ? input.value : value}
        onChange={e => {
          input && input.onChange(e.target.value)
          if (onChangeFromField) {
            onChangeFromField(e.target.value)
          }
        }}
        inputProps={InputProps}
        multiline={!!rows}
        placeholder={hint}
        style={{ ...controlStyle, ...style }}
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
