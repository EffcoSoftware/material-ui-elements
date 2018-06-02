import React from 'react'
import DatePicker from 'material-ui-pickers/DatePicker'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import MuiTextfield from './MuiTextfield'

const MuiDatePicker = props => {
  const {
    locale,
    cancelLabel,
    input,
    onChange: onChangeFromField,
    format,
    value,
    ...rest
  } = props

  const inputValue = (input && input.value) || value

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        onChange={e => {
          input && input.onChange(e)
          if (onChangeFromField) {
            onChangeFromField(e)
          }
        }}
        autoOk
        {...rest}
        locale={locale}
        cancelLabel={cancelLabel}
        value={inputValue || null}
        hintStyle={{ color: '#aaa' }}
        format={format || 'DD/MM/YYYY'}
        fullWidth
        underlineStyle={{ borderColor: '#999' }}
        TextFieldComponent={MuiTextfield}
      />
    </MuiPickersUtilsProvider>
  )
}
export default MuiDatePicker
