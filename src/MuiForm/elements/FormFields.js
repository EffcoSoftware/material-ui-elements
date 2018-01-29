import React from 'react'
import _ from 'lodash'
import FormFieldRedux from './FormFieldRedux'
import FormFieldsHorizontal from './FormFieldsHorizontal'
import FormFieldsVertical from './FormFieldsVertical'

const FormFields = props => {
  const { fields, formFieldsStyle, margin = 24 } = props
  return (
    <div style={{ margin, width: '100%', ...formFieldsStyle }}>
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
