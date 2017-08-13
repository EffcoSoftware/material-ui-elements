import React from 'react'
import Form from './Form'
import Subform from './Subform'

const MuiForm = props => {
  if (props.subform) return <Subform {...props} />
  return <Form {...props} />
}

export default MuiForm
