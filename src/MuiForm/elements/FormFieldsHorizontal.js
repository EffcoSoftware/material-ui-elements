import React from 'react'
import Hidden from 'material-ui/Hidden'
// import FormField from './FormField'
import FormFieldRedux from './FormFieldRedux'

import { calculateTextWidth } from '../../helpers'

const FormFieldsHorizontal = props => {
  const { fields, fieldWidths } = props
  // const formField = !props.noRedux ? FormFieldRedux : FormField
  return (
    <Hidden xsDown>
      <div style={{ display: 'flex' }}>
        {fields.map((f, i) => {
          return (
            !f.hidden && (
              <div
                key={i}
                style={{
                  flex: fieldWidths && f.maxChars ? undefined : 1,
                  marginLeft: i ? 20 : 0,
                  marginRight: i === fields.length ? 5 : 0,
                  width:
                    fieldWidths && f.maxChars
                      ? calculateTextWidth(
                          f.label,
                          f.maxChars,
                          100,
                          fieldWidths.config
                        )
                      : undefined
                }}
              >
                <FormFieldRedux {...props} {...f} />
              </div>
            )
          )
        })}
      </div>
    </Hidden>
  )
}

export default FormFieldsHorizontal
