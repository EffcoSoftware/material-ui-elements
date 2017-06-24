import React from 'react'
import _ from 'lodash'
// import FormField from './FormField'
import FormFieldRedux from './FormFieldRedux'
import FormFieldsHorizontal from './FormFieldsHorizontal'
import FormFieldsVertical from './FormFieldsVertical'

const FormFields = props => {
  const { fields } = props
  // const formField = !props.noRedux ? FormFieldRedux : FormField

  return (
    <div style={{ margin: 24 }}>
      {fields
        ? fields.map(
            (f, i) =>
              _.isArray(f)
                ? <div key={i}>
                    <FormFieldsHorizontal {...props} fields={f} />
                    <FormFieldsVertical {...props} fields={f} />
                  </div>
                : <FormFieldRedux key={i} {...props} {...f} />
          )
        : null}
    </div>
  )
}

export default FormFields
