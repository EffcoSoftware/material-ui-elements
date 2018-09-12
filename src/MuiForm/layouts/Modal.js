import React from 'react'
import Dialog, { DialogActions } from 'material-ui/Dialog'
import AppBar from 'material-ui/AppBar'
import Divider from 'material-ui/Divider'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import FormTabs from '../elements/FormTabs'
import FormFields from '../elements/FormFields'
import CrudButtons from '../../CrudButtons'

const FormModal = props => {
  const {
    add,
    disabled,
    pristine,
    submitting,
    invalid,
    title,
    groups,
    fields,
    actions,
    open,
    bottomComponent
  } = props

  console.log(bottomComponent)

  return (
    <Dialog
      open={open}
      maxWidth="lg"
      onClose={actions.cancel.action || actions.cancel}
    >
      <AppBar
        style={{
          margin: 0,
          paddingRight: 0,
          position: 'relative',
          boxShadow: 'none'
        }}
      >
        <Toolbar>
          {/*<IconButton>
              <ChevronLeft />
            </IconButton>*/}
          <div style={{ flex: 1 }} />
          <Typography variant="title" color="inherit">
            <div style={{ color: 'white' }}>{title || 'Details'}</div>
          </Typography>
          <div style={{ flex: 1 }} />
          {/*<IconButton>
              <ChevronRight />
            </IconButton>*/}
        </Toolbar>
      </AppBar>
      <div
        style={{
          width: 1000,
          overflow: 'auto'
        }}
      >
        {groups ? (
          <FormTabs {...props} />
        ) : (
          <FormFields fields={fields} {...props} />
        )}
      </div>
      {actions && <Divider />}
      <DialogActions>
        {bottomComponent && (
          <div style={{ marginLeft: 24 }}>{bottomComponent}</div>
        )}
        {actions ? (
          <CrudButtons
            add={add}
            submittable={!(pristine || submitting || invalid)}
            disabled={disabled}
            actions={actions}
            {...props}
          />
        ) : null}
      </DialogActions>
    </Dialog>
  )
}

export default FormModal
