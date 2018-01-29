import React from 'react'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'

function Transition(props) {
  return <Slide direction="up" {...props} />
}

const AlertDialogSlide = props => {
  const { action, actionCancel, lang } = props
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
