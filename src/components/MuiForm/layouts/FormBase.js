import React from 'react'
import FormFields from '../elements/FormFields'

const FormBasic = props => {
  const { config: { fields } } = props

  return (
    <div>
      <FormFields fields={fields} {...props} />
    </div>
  )
}

export default FormBasic
