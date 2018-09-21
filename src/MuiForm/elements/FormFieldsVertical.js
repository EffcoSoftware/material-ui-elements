import React from 'react'
import Hidden from 'material-ui/Hidden'
// import FormField from './FormField'
import FormFieldRedux from './FormFieldRedux'

const FormFieldsVertical = props => {
  const { fields, printLayout } = props

  if (printLayout) return null
  // const formField = !props.noRedux ? FormFieldRedux : FormField
  return (
    <Hidden smUp>
      <div>
        {fields.map(
          (f, i) => !f.hidden && <FormFieldRedux key={i} {...props} {...f} />
        )}
      </div>
    </Hidden>
  )
}

export default FormFieldsVertical
