import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import LinearProgress from '../../LinearProgress'
import FormFields from '../elements/FormFields'
import FormError from '../elements/FormError'
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
    api = {}
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
      {api.error && <FormError error={api.error} />}
      {api.loading && <LinearProgress />}
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
