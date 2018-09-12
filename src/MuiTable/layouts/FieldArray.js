import React from 'react'
import FieldArrayForm from './FieldArrayForm'
import FieldArraySubform from './FieldArraySubform'

const FieldArray = props => {
  const propsAdjusted = { ...props, fieldArray: true }
  if (props.subform) return <FieldArraySubform {...propsAdjusted} />
  return <FieldArrayForm {...propsAdjusted} />
}

export default FieldArray
