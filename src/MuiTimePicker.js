import React from 'react'
import TimePicker from 'material-ui-effco/TimePicker'

const MuiTimePicker = props => {
  const {
    input,
    meta,
    format,
    underlineDisabledStyle,
    label,
    onChange,
    required,
    minutesStep,
    hint,
    hideLabel,
    ...rest
  } = props

  return (
    <TimePicker
      onChange={(e, time) => {
        input.onChange(time)
        if (onChange) onChange(time)
      }}
      autoOk
      {...rest}
      value={input && input.value && new Date(input.value)}
      format={format || '24hr'}
      floatingLabelText={
        !hideLabel && label ? `${label}${required ? ' *' : ''}` : ''
      }
      floatingLabelFixed
      fullWidth
      errorText={meta && meta.touched && meta.error && meta.error}
      underlineDisabledStyle={underlineDisabledStyle || { borderColor: '#ccc' }}
      hintText={hint}
      hintStyle={{ color: '#bbb' }}
      minutesStep={minutesStep || 5}
      underlineStyle={{ borderColor: '#999' }}
    />
  )
}

export default MuiTimePicker
