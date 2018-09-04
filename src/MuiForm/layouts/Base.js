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
          <Typography variant="title">{formLabel}</Typography>
        </Toolbar>
      )}
      <FormFields fields={fields} {...props} />
      <div style={{ display: 'flex', margin: 12 }}>
        <div style={{ flex: 1 }} />
        <div>
          <CrudButtons
            add={add}
            submittable={!(pristine || submitting || invalid)}
            disabled={disabled}
            actions={actions}
            {...props}
          />
        </div>
      </div>
    </div>
  )
}

export default FormBasic
