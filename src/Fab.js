import React from 'react'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

const styles = {
  zIndex: 1,
  margin: 0,
  top: 'auto',
  right: 50,
  bottom: 50,
  left: 'auto',
  position: 'fixed'
}

const Fab = ({ onClick, color, style }) => (
  <Button
    variant="fab"
    color={color || 'primary'}
    style={style ? Object.assign({}, styles, style) : styles}
    onClick={onClick}
  >
    <Icon>add</Icon>
  </Button>
)

export default Fab
