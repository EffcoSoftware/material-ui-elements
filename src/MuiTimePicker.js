import React from 'react'
import TimePicker from 'material-ui-pickers/TimePicker'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import MuiTextfield from './MuiTextfield'

const MuiTimePicker = props => {
  const {
    input,
    meta,
    format,
    onChange: onChangeFromField,
    value,
    ...rest
  } = props

  const inputValue = (input && input.value) || value
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <TimePicker
        onChange={e => {
          input && input.onChange(e)
          if (onChangeFromField) {
            onChangeFromField(e)
          }
        }}
        autoOk
        {...rest}
        value={inputValue || null}
        format={format || 'HH:mm'}
        ampm={false}
        fullWidth
        underlineStyle={{ borderColor: '#999' }}
        TextFieldComponent={MuiTextfield}
      />
    </MuiPickersUtilsProvider>
  )
}

export default MuiTimePicker
