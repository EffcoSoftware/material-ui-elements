import React from 'react'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'

const styles = {
  margin: 0,
  top: 'auto',
  right: 50,
  bottom: 50,
  left: 'auto',
  position: 'fixed'
}

const Fab = ({ onClick, color }) =>
  <Button fab style={styles} color={color || 'accent'} onClick={onClick}>
    <Icon>add</Icon>
  </Button>

export default Fab
