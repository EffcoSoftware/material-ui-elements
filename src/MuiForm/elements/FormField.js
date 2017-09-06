import React from 'react'
import Typography from 'material-ui/Typography'
import MuiTextfield from '../../MuiTextfield'
import MuiSelectfield from '../../MuiSelectfield'
import MuiAutocomplete from '../../MuiAutocomplete'

const FormField = props => {
  const {
    add,
    type,
    text,
    component,
    label,
    hint,
    required,
    options,
    disabled,
    style,
    input,
    meta,
    value,
    showAutocompleteThreshold,
    underlineShow,
    numeric
  } = props

  switch (type) {
    case 'select':
      return (
        <MuiSelectfield
          input={input}
          meta={meta}
          disabled={add ? false : disabled}
          floatingLabelText={label}
          hintText={hint}
          required={required}
          options={options}
          style={style}
          value={value}
          numeric={numeric}
        />
      )
    case 'autocomplete':
      return (
        <MuiAutocomplete
          input={input}
          meta={meta}
          disabled={add ? false : disabled}
          floatingLabelText={label}
          hintText={hint}
          required={required}
          options={options}
          style={style}
          value={value}
          numeric={numeric}
          showAutocompleteThreshold={showAutocompleteThreshold}
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
    case 'typography':
      return <Typography type={text}>{label}</Typography>
    default:
      return (
        <MuiTextfield
          input={input}
          meta={meta}
          type={type}
          disabled={add ? false : disabled}
          floatingLabelText={label}
          hintText={hint}
          required={required}
          style={style}
          value={value}
          numeric={numeric}
          underlineShow={underlineShow}
        />
      )
  }
}

export default FormField
