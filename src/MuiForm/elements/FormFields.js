import React from 'react'
import _ from 'lodash'
// import FormField from './FormField'
import FormFieldRedux from './FormFieldRedux'
import FormFieldsHorizontal from './FormFieldsHorizontal'
import FormFieldsVertical from './FormFieldsVertical'

const FormFields = props => {
  const { fields, formFieldsStyle } = props
  // const formField = !props.noRedux ? FormFieldRedux : FormField
  return (
    <div style={{ margin: 24, ...formFieldsStyle }}>
      {fields &&
        fields.map(
          (f, i) =>
            _.isArray(f) ? (
              <div key={i}>
                <FormFieldsHorizontal {...props} fields={f} />
                <FormFieldsVertical {...props} fields={f} />
              </div>
            ) : (
                !f.hidden && <FormFieldRedux key={i} {...props} {...f} />
              )
        )}
    </div>
  )
}

export default FormFields
