import React from 'react'
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { InputAdornment } from 'material-ui/Input'
import { controlStyle } from './constants'
import MuiTextfieldPrint from './MuiTextfieldPrint'

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
    required,
    onChangeFromField,
    value,
    margin,
    numeric,
    inputStyle,
    formControlStyle,
    printLayout
  } = props

  if (printLayout) return <MuiTextfieldPrint {...props} />
  if (numeric) controlStyle.textAlign = 'right'

  return (
    <FormControl
      margin={margin || 'normal'}
      rows={rows}
      fullWidth
      error={meta ? !!(meta.error && meta.touched && meta.error) : false}
      required={required}
      disabled={disabled}
      style={formControlStyle}
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
            onChangeFromField(e.target.value, e)
          }
        }}
        inputProps={{ style: inputStyle }}
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
