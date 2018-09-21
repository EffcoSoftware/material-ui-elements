import React from 'react'
import FormFieldRedux from './FormFieldRedux'

const FormFieldsHorizontal = props => {
  const { fields } = props

  return (
    <div style={{ display: 'table', width: '100%' }}>
      {fields.map(
        (f, i) =>
          !f.hidden && (
            <div
              key={i}
              style={{
                display: 'table-cell'
                // marginLeft: i ? 20 : 0,
                // marginRight: i === fields.length ? 5 : 0
              }}
            >
              <FormFieldRedux {...props} {...f} />
            </div>
          )
      )}
    </div>
  )
}

export default FormFieldsHorizontal
