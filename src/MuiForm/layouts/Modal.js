import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
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
        onClose={actions.cancel && (actions.cancel.action || actions.cancel)}
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
            <FormFields
              fields={groups[this.state.tabIndex].fields}
              {...this.props}
            />
          ) : (
            <FormFields fields={fields} {...this.props} />
          )}
        </DialogContent>
        {actions && <Divider />}
        <DialogActions style={{ margin: 12 }}>
          {actions ? (
            <CrudButtons
              tabIndex={this.state.tabIndex}
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
