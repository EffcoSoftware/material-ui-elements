import React from 'react'
import Card, { CardContent, CardActions } from 'material-ui/Card'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
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
    actions
  } = props
  const formLabel = label || title || ''
  return (
    <Card>
      {formLabel ? (
        <Toolbar>
          <Typography variant="title">{formLabel}</Typography>
        </Toolbar>
      ) : null}
      <CardContent>
        <FormFields fields={fieldsGroup || fields} {...props} />
      </CardContent>
      {actions && <Divider />}
      {!fieldsGroup &&
        actions &&
        !actions.drawer && (
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }} />
            <CardActions>
              <CrudButtons
                add={add}
                submittable={!(pristine || submitting || invalid)}
                disabled={disabled}
                actions={actions}
                {...props}
              />
            </CardActions>
          </div>
        )}
    </Card>
  )
}

export default FormPaper
