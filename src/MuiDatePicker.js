import React from 'react'
import DatePicker from 'material-ui-effco/DatePicker'
import moment from 'moment'

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
      floatingLabelStyle={
        input && input.floatingLabelStyle
          ? input.floatingLabelStyle
          : rest && rest.floatingLabelStyle
            ? rest.floatingLabelStyle
            : undefined
      }
      floatingLabelFixed
      value={input.value ? new Date(input.value) : null}
      underlineDisabledStyle={
        rest.underlineDisabledStyle || { borderColor: '#ccc' }
      }
      hintStyle={{ color: '#aaa' }}
      errorText={meta ? meta.touched && meta.error && meta.error : ''}
      DateTimeFormat={Intl.DateTimeFormat}
      formatDate={
        rest && rest.dateFormat
          ? date => moment(date).format(rest.dateFormat)
          : null
      }
      container="inline"
      underlineStyle={{ borderColor: '#999' }}
    />
  )
}
export default MuiDatePicker
