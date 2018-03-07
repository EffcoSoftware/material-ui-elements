import React from 'react'
import _ from 'lodash'
import Typography from 'material-ui/Typography'
import MuiTextfield from '../../MuiTextfield'
import MuiSelectfield from '../../MuiSelectfield'
import MuiAutocomplete from '../../MuiAutocomplete'
import MuiDatePicker from '../../MuiDatePicker'
import MuiTimePicker from '../../MuiTimePicker'

const FormField = ({ name, formField, ...props }) => {
  const propsAdjusted = _.omit(props, [
    'clearAsyncError',
    'clearSubmitErrors',
    'clearSubmit',
    'triggerSubmit',
    'dateFormat',
    'submitSucceeded',
    'initialValues',
    'handleSubmit',
    'asyncValidate',
    'anyTouched',
    'add',
    'pure',
    'blur',
    'change',
    'destroy',
    'initialize',
    'reset',
    'touch',
    'untouch',
    'layout',
    'autofill',
    'submit',
    'info',
    'expanded',
    'valid',
    'invalid',
    'initialized'
  ])

  const { add, type, text, component, label, disabled, style } = props

  const disabledField = add && !disabled ? false : disabled

  switch (type) {
    case 'select':
      return <MuiSelectfield {...propsAdjusted} disabled={disabledField} />
    case 'autocomplete':
      return <MuiAutocomplete {...propsAdjusted} disabled={disabledField} />
    case 'subheading':
      return (
        <div style={style || { marginTop: 30, marginBottom: 5 }}>
          <Typography variant="body2">{label}</Typography>
        </div>
      )
    case 'spacer':
      return <div style={style || { marginTop: 20 }} />
    case 'component':
      return component
    case 'typography':
      return <Typography variant={text}>{label}</Typography>
    case 'datepicker':
      return <MuiDatePicker {...propsAdjusted} id={Math.random().toString()} />
    case 'timepicker':
      return <MuiTimePicker {...propsAdjusted} />
    default:
      return <MuiTextfield {...propsAdjusted} disabled={disabledField} />
  }
}

export default FormField
