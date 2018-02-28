import React from 'react'
import Typography from 'material-ui/Typography'
import MuiTextfield from '../../MuiTextfield'
import MuiSelectfield2 from '../../MuiSelectfield2'
import MuiSelectfield from '../../MuiSelectfield'
import MuiAutocomplete from '../../MuiAutocomplete'
import MuiDatePicker from '../../MuiDatePicker'
import MuiTimePicker from '../../MuiTimePicker'

const FormField = ({ name, formField, ...props }) => {
  const { add, type, text, component, label, disabled, style } = props

  const disabledField = add && !disabled ? false : disabled

  switch (type) {
    case 'select':
      return <MuiSelectfield {...props} disabled={disabledField} />
    case 'select2':
      return <MuiSelectfield2 {...props} disabled={disabledField} />
    case 'autocomplete':
      return <MuiAutocomplete {...props} disabled={disabledField} />
    case 'subheading':
      return (
        <div style={style || { marginTop: 30, marginBottom: 5 }}>
          <Typography type="body2">{label}</Typography>
        </div>
      )
    case 'spacer':
      return <div style={style || { marginTop: 20 }} />
    case 'component':
      return component
    case 'typography':
      return <Typography type={text}>{label}</Typography>
    case 'datepicker':
      return <MuiDatePicker {...props} id={Math.random().toString()} />
    case 'timepicker':
      return <MuiTimePicker {...props} />
    default:
      return <MuiTextfield {...props} disabled={disabledField} />
  }
}

export default FormField
