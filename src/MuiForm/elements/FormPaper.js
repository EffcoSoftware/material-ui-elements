import React from 'react'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

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
