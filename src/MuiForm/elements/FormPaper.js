import React from 'react'
import Paper from 'material-ui/Paper'
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
    actions,
    bottomComponent
  } = props

  const formLabel = label || title || ''
  return (
    <Paper>
      {formLabel ? (
        <Toolbar>
          <Typography type="title">{formLabel}</Typography>
        </Toolbar>
      ) : (
        <div style={{ height: 1 }} />
      )}
      <FormFields fields={fieldsGroup || fields} {...props} />
      {actions && <Divider />}
      {!fieldsGroup ? (
        <div
          style={{
            marginLeft: 6,
            marginRight: 6,
            marginTop: 6,
            paddingBottom: 6
          }}
        >
          <div style={{ flex: 1 }} />
          <div>
            {actions &&
              !actions.drawer && (
                <div style={{ display: 'flex' }}>
                  <div style={{ flex: 1 }} />
                  {bottomComponent && (
                    <div style={{ marginLeft: 24 }}>{bottomComponent}</div>
                  )}
                  <CrudButtons
                    add={add}
                    submittable={!(pristine || submitting || invalid)}
                    disabled={disabled}
                    actions={actions}
                    {...props}
                  />
                </div>
              )}
          </div>
        </div>
      ) : null}
    </Paper>
  )
}

export default FormPaper
