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
      <RadioGroup value={input ? input.value : value}>
        <div style={{ display: 'flex' }}>
          {options.map((o, i) => (
            <div
              key={o.value}
              style={{
                flex: 1,
                marginLeft: i ? 20 : 0,
                marginRight: i === options.length ? 5 : 0
              }}
            >
              <FormControlLabel
                control={
                  <Radio
                    onChange={e => {
                      input && input.onChange(e.target.value)
                      if (onChangeFromField) {
                        onChangeFromField(e.target.value)
                      }
                    }}
                    value={o.value}
                    checked={(input ? input.value : value) === o.value}
                    color="primary"
                  />
                }
                label={o.label}
              />
            </div>
          ))}
        </div>
      </RadioGroup>
      <FormHelperText>
        {meta && meta.touched && meta.error && meta.error}
      </FormHelperText>
    </FormControl>
  )
}

export default MuiRadioGroup
