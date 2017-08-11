import React from 'react'
import Dialog, { DialogActions } from 'material-ui/Dialog'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
// import IconButton from 'material-ui/IconButton'
// import ChevronLeft from 'material-ui-icons/ChevronLeft'
// import ChevronRight from 'material-ui-icons/ChevronRight'
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
    open
  } = props

  return (
    <Dialog open={open} maxWidth="md">
      <div style={{ width: 800, overflow: 'auto' }}>
        <AppBar style={{ position: 'relative', boxShadow: 'none' }}>
          <Toolbar>
            {/*<IconButton>
              <ChevronLeft />
            </IconButton>*/}
            <div style={{ flex: 1 }} />
            <Typography type="title" color="inherit">
              {title || 'Details'}
            </Typography>
            <div style={{ flex: 1 }} />
            {/*<IconButton>
              <ChevronRight />
            </IconButton>*/}
          </Toolbar>
        </AppBar>
        {groups
          ? <FormTabs {...props} />
          : <FormFields fields={fields} {...props} />}
        <DialogActions>
          {actions
            ? <CrudButtons
                add={add}
                submittable={!(pristine || submitting || invalid)}
                disabled={disabled}
                actions={actions}
                {...props}
              />
            : null}
        </DialogActions>
      </div>
    </Dialog>
  )
}

export default FormModal
