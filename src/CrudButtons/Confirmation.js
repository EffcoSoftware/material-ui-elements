import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

const Transition = props => {
  return <Slide direction="up" {...props} />
}

const AlertDialogSlide = props => {
  const { action, actionCancel, lang = 'en' } = props
  return (
    <Dialog open={!!action} transition={Transition} onClose={actionCancel}>
      <DialogTitle id="alert-dialog-slide-title">
        {props.title || 'Confirmation'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {props.content || 'Are you sure you wish to continue?'}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            action()
            actionCancel()
          }}
          color="primary"
        >
          {(action && action.label) || 'OK'}
        </Button>
        <Button onClick={actionCancel} color="primary">
          {actionCancel.label || (lang === 'en' ? 'Cancel' : 'Anuluj')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AlertDialogSlide
