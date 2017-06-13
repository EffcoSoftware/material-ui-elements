import React from 'react'
import Typography from 'material-ui/Typography'
import MuiTextfield from '../../MuiTextfield'
import MuiSelectfield from '../../MuiSelectfield'

const FormField = props => {
  const {
    type,
    component,
    label,
    hint,
    required,
    options,
    disabled,
    style,
    input,
    meta
  } = props

  switch (type) {
    case 'select':
      return (
        <MuiSelectfield
          input={input}
          meta={meta}
          disabled={disabled}
          floatingLabelText={label}
          hintText={hint}
          required={required}
          options={options}
          style={style}
        />
      )
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
    default:
      return (
        <MuiTextfield
          input={input}
          meta={meta}
          type={type}
          disabled={disabled}
          floatingLabelText={label}
          hintText={hint}
          required={required}
          style={style}
        />
      )
  }
}

export default FormField
