import React from 'react'
import Hidden from 'material-ui/Hidden'
// import FormField from './FormField'
import FormFieldRedux from './FormFieldRedux'

const FormFieldsVertical = props => {
  const { fields } = props
  // const formField = !props.noRedux ? FormFieldRedux : FormField
  return (
    <Hidden smUp>
      <div>
        {fields.map((f, i) => <FormFieldRedux key={i} {...props} {...f} />)}
      </div>
    </Hidden>
  )
}

export default FormFieldsVertical
