import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import ArrowBack from 'material-ui-icons/ArrowBack'
import ArrowForward from 'material-ui-icons/ArrowForward'
import MuiTextfield from '../MuiTextfield'

const Form = config => {
  return (
    <div>
      <AppBar style={{ position: 'relative', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton contrast>
            <ArrowBack />
          </IconButton>
          <div style={{ flex: 1 }} />
          <Typography type="title" colorInherit>Title</Typography>
          <div style={{ flex: 1 }} />
          <IconButton contrast>
            <ArrowForward />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MuiTextfield label="hello" error="123" />
    </div>
  )
}

export default Form
