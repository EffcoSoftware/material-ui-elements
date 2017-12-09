import React from 'react'
import DatePicker from 'material-ui-effco/DatePicker'
const MuiDatePicker = props => {
  const { input, meta, label, required, hideLabel, ...rest } = props

  return (
    <DatePicker
      onChange={(e, date) => input.onChange(date)}
      autoOk
      {...rest}
      floatingLabelText={
        !hideLabel && label ? `${label}${required ? ' *' : ''}` : ''
      }
      floatingLabelFixed
      value={new Date(input.value)}
      underlineDisabledStyle={
        rest.underlineDisabledStyle || { borderColor: '#ccc' }
      }
      hintStyle={{ color: '#aaa' }}
      errorText={meta ? meta.touched && meta.error && meta.error : ''}
      DateTimeFormat={Intl.DateTimeFormat}
      container="inline"
    />
  )
}
export default MuiDatePicker
