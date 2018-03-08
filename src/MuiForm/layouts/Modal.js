import React, { Component } from 'react'
import Dialog, { DialogActions, DialogContent } from 'material-ui/Dialog'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Tabs, { Tab } from 'material-ui/Tabs'
import FormFields from '../elements/FormFields'
import CrudButtons from '../../CrudButtons'

class FormModal extends Component {
  state = { tabIndex: 0 }

  render() {
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
    } = this.props

    return (
      <Dialog
        open={open}
        maxWidth="md"
        fullWidth
        onClose={actions.cancel.action || actions.cancel}
      >
        <AppBar
          position="static"
          style={{
            boxShadow: 'none'
          }}
        >
          <Toolbar>
            <div style={{ flex: 1 }} />
            <Typography variant="title" color="inherit">
              <div style={{ color: 'white' }}>{title || 'Details'}</div>
            </Typography>
            <div style={{ flex: 1 }} />
          </Toolbar>
          {groups && (
            <Tabs
              value={this.state.tabIndex}
              onChange={(e, v) => this.setState({ tabIndex: v })}
              indicatorColor="secondary"
              fullWidth
              scrollButtons="off"
              centered
            >
              {groups.map((g, i) => (
                <Tab key={i} style={{ flex: 1 }} label={g.label} />
              ))}
            </Tabs>
          )}
        </AppBar>
        <DialogContent>
          {groups ? (
            <div>
              <FormFields
                margin={12}
                fields={groups[this.state.tabIndex].fields}
                {...this.props}
              />
            </div>
          ) : (
            <FormFields fields={fields} {...this.props} />
          )}
        </DialogContent>
        <DialogActions>
          {actions ? (
            <CrudButtons
              add={add}
              submittable={!(pristine || submitting || invalid)}
              disabled={disabled}
              actions={actions}
              {...this.props}
            />
          ) : null}
        </DialogActions>
      </Dialog>
    )
  }
}

export default FormModal
