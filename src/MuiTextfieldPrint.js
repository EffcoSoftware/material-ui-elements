import React from 'react'
import Typography from 'material-ui/Typography'

const MuiTextfieldPrint = props => {
  const {
    value,
    label,
    input = {},
    valueVariant = 'body1',
    labelVariant = 'caption',
    style
  } = props

  const inputValue = input.value || ''

  return (
    <div style={{ margin: 0, ...style }}>
      <Typography variant={valueVariant}>
        {inputValue || value || '-'}
      </Typography>
      <Typography variant={labelVariant}>{label}</Typography>
    </div>
  )
}

export default MuiTextfieldPrint
