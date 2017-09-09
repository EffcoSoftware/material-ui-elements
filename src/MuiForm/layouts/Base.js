import React from 'react'
import FormFields from '../elements/FormFields'
import CrudButtons from '../../CrudButtons'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const FormBasic = props => {
  const {
    fields,
    add,
    disabled,
    pristine,
    submitting,
    invalid,
    actions,
    label,
    title
  } = props
  const formLabel = label || title || ''

  return (
    <div>
      {formLabel && (
        <Toolbar>
          <Typography type="title">{formLabel}</Typography>
        </Toolbar>
      )}
      <FormFields fields={fields} {...props} />
      <CrudButtons
        add={add}
        submittable={!(pristine || submitting || invalid)}
        disabled={disabled}
        actions={actions}
        {...props}
      />
    </div>
  )
}

export default FormBasic
