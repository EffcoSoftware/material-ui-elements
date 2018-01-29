import React from 'react'
import { Field } from 'redux-form'
import FormField from './FormField'

const FormFieldRedux = props => {
  // console.log(props)

  if (props.name)
    return <Field name={props.name} component={FormField} {...props} />
  return <FormField {...props} />
}

export default FormFieldRedux
