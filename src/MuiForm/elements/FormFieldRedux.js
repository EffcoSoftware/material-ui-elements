import React from 'react'
import { Field } from 'redux-form'
import FormField from './FormField'

const FormFieldRedux = props => {
  if (props.name)
    return (
      <Field
        name={props.name}
        component={FormField}
        {...props}
        validate={props.validate}
      />
    )
  return <FormField {...props} />
}

export default FormFieldRedux
