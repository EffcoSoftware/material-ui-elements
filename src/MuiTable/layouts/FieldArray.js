import React from 'react'
import FieldArrayForm from './FieldArrayForm'
import FieldArraySubform from './FieldArraySubform'

const FieldArray = props => {
  if (props.subform) return <FieldArraySubform {...props} />
  return <FieldArrayForm {...props} />
}

export default FieldArray
