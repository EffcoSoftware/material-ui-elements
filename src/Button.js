import React from 'react'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'

export default props => {
  const { action, icon, label, ...rest } = props
  if (action) {
    return (
      <Button {...rest} onClick={action}>
        {icon && <Icon style={{ marginRight: 5 }}>{icon}</Icon>}
        {label}
      </Button>
    )
  }

  return null
}
