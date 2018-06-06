import React from 'react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputAdornment from '@material-ui/core/InputAdornment'
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
    margin,
    onClick,
    hideLabel,
    helperText
  } = props

  return (
    <FormControl
      margin={margin || 'normal'}
      error={!!(meta && meta.touched && meta.error)}
      rows={rows}
      fullWidth
      required={required}
      disabled={disabled}
    >
      {!hideLabel && (
        <InputLabel style={floatingLabelStyle} shrink>
          {label}
        </InputLabel>
      )}
      <Input
        onClick={onClick && onClick}
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
        {helperText || (meta && meta.touched && meta.error && meta.error)}
      </FormHelperText>
    </FormControl>
  )
}

export default MuiTextfield
