import React from 'react'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'

export default ({
  action,
  label,
  disabled,
  className,
  icon,
  style,
  raised,
  color,
  compact
}) => {
  if (action) {
    return (
      <Button
        className={className}
        onClick={action}
        disabled={disabled}
        style={style}
        raised={raised}
        color={color}
        dense={compact}
      >
        {icon
          ? <Icon style={{ marginRight: 5 }}>
              {icon}
            </Icon>
          : null}
        {label}
      </Button>
    )
  }

  return null
}
