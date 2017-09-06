import React from 'react'
import Hidden from 'material-ui/Hidden'
// import FormField from './FormField'
import FormFieldRedux from './FormFieldRedux'

const FormFieldsHorizontal = props => {
  const { fields } = props
  // const formField = !props.noRedux ? FormFieldRedux : FormField
  return (
    <Hidden xsDown>
      <div style={{ display: 'flex' }}>
        {fields.map(
          (f, i) =>
            !f.hidden && (
              <div
                key={i}
                style={{
                  flex: 1,
                  marginLeft: i ? 20 : 0,
                  marginRight: i === fields.length ? 5 : 0
                }}
              >
                <FormFieldRedux {...props} {...f} />
              </div>
            )
        )}
      </div>
    </Hidden>
  )
}

export default FormFieldsHorizontal
