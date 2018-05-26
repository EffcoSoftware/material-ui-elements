import React from 'react'
import { FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import Radio, { RadioGroup } from 'material-ui/Radio'

const MuiRadioGroup = props => {
  const {
    input,
    meta,
    disabled,
    label,
    rows,
    required,
    onChange: onChangeFromField,
    value,
    options = [],
    margin
  } = props
  console.log(props)

  return (
    <FormControl
      margin={margin || 'normal'}
      error={!!(meta && meta.touched && meta.error)}
      rows={rows}
      fullWidth
      required={required}
      disabled={disabled}
    >
      <InputLabel shrink>{label}</InputLabel>
      <div style={{ marginBottom: 15 }} />
      <RadioGroup
        value={input ? input.value : value}
        onChange={e => {
          input && input.onChange(e.target.value)
          if (onChangeFromField) {
            onChangeFromField(e.target.value)
          }
        }}
      >
        {options.map(o => (
          <FormControlLabel
            key={o.value}
            value={o.value}
            control={<Radio />}
            label={o.label}
          />
        ))}
      </RadioGroup>
      <FormHelperText>
        {meta && meta.touched && meta.error && meta.error}
      </FormHelperText>
    </FormControl>
  )
}

export default MuiRadioGroup
