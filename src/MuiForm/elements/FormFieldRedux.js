import React from 'react'
import { Field } from 'redux-form'
import FormField from './FormField'

const FormFieldRedux = props => {
  if (props.name || props.type === 'crud')
    return <Field name={props.name} component={FormField} {...props} />
  return <FormField {...props} />
}

export default FormFieldRedux
