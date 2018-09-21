import React from 'react'
import _ from 'lodash'
import Typography from 'material-ui/Typography'

const MuiSelectfieldPrint = props => {
  const {
    value,
    label,
    options,
    input: { value: inputValue }
  } = props
  return (
    <div style={{ margin: 8 }}>
      <Typography variant="body1">
        {_.find(options || [], { value: inputValue || value }) &&
          _.find(options || [], { value: inputValue || value }).label}
      </Typography>
      <Typography variant="caption">{label}</Typography>
    </div>
  )
}

export default MuiSelectfieldPrint
