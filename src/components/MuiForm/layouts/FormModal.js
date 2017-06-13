import React from 'react'
import Dialog, { DialogActions } from 'material-ui/Dialog'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import ChevronLeft from 'material-ui-icons/ChevronLeft'
import ChevronRight from 'material-ui-icons/ChevronRight'
import FormTabs from '../elements/FormTabs'
import FormFields from '../elements/FormFields'
import CrudButtons from '../../CrudButtons'

const FormModal = props => {
  const { disabled, config: { title, groups, fields, actions } } = props

  return (
    <div>
      <Dialog open>
        <AppBar style={{ position: 'relative', boxShadow: 'none' }}>
          <Toolbar>
            <IconButton>
              <ChevronLeft />
            </IconButton>
            <div style={{ flex: 1 }} />
            <Typography type="title">
              {title || 'Details'}
            </Typography>
            <div style={{ flex: 1 }} />
            <IconButton>
              <ChevronRight />
            </IconButton>
          </Toolbar>
        </AppBar>
        {groups
          ? <FormTabs {...props} />
          : <FormFields fields={fields} {...props} />}
        <DialogActions>
          <CrudButtons
            disabled={disabled}
            labelAdd={actions.add ? actions.add.label : null}
            actionAdd={actions.add ? actions.add.action || actions.add : null}
            labelEdit={actions.edit ? actions.edit.label : null}
            actionEdit={
              actions.edit ? actions.edit.action || actions.edit : null
            }
            labelSave={actions.save ? actions.save.label : null}
            actionSave={
              actions.save ? actions.save.action || actions.save : null
            }
            labelDelete={actions.delete ? actions.delete.label : null}
            actionDelete={
              actions.delete ? actions.delete.action || actions.delete : null
            }
            labelUndo={actions.undo ? actions.undo.label : null}
            actionUndo={
              actions.undo ? actions.undo.action || actions.undo : null
            }
            labelCancel={actions.cancel ? actions.cancel.label : null}
            actionCancel={
              actions.cancel ? actions.cancel.action || actions.cancel : null
            }
          />
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default FormModal
