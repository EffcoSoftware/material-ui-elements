import React from 'react'
import { withTheme } from '@material-ui/core/styles'

const FormError = props => {
  console.log(props)

  return (
    <div style={{ margin: 8, background: props.theme.palette.primary[500] }}>
      {props.error}
    </div>
  )
}

export default withTheme()(FormError)
