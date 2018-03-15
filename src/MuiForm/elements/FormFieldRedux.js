import React from 'react'
import { Field } from 'redux-form'
import FormField from './FormField'
import MuiTable from '../../MuiTable'

const FormFieldRedux = props => {
  const { type, name } = props
  if (type === 'table') return <MuiTable {...props} />
  if (props.name) return <Field name={name} component={FormField} {...props} />
  return <FormField {...props} />
}

export default FormFieldRedux
