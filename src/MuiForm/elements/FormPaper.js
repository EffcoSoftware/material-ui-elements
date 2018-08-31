import React from 'react'
import Paper from 'material-ui/Paper'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import FormFields from '../elements/FormFields'
import CrudButtons from '../../CrudButtons'

const FormPaper = props => {
  const {
    label,
    fieldsGroup,
    add,
    disabled,
    pristine,
    submitting,
    invalid,
    title,
    fields,
    actions,
    customLayout
  } = props

  const formLabel = label || title || ''
  return (
    <Paper>
      {formLabel ? (
        <Toolbar>
          <Typography type="title">{formLabel}</Typography>
        </Toolbar>
      ) : null}
      <FormFields fields={fieldsGroup || fields} {...props} />
      {!fieldsGroup ? (
        <div
          style={{
            marginLeft: 24,
            marginRight: 24,
            marginTop: 24,
            paddingBottom: 12
          }}
        >
          {!customLayout &&
            actions &&
            !actions.drawer && (
              <CrudButtons
                add={add}
                submittable={!(pristine || submitting || invalid)}
                disabled={disabled}
                actions={actions}
                {...props}
              />
            )}
        </div>
      ) : null}
    </Paper>
  )
}

export default FormPaper
