import React from 'react'
import FieldArray from './FieldArray'

const FieldArrayPaper = props => {
  return <FieldArray {...{ ...props, paper: true }} />
}

export default FieldArrayPaper
