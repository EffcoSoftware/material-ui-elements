import React from 'react'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'

const RowActions = props => {
  const { fields, index, rowActions, disabled } = props
  return (
    <div>
      {rowActions
        ? rowActions.map(a => (
            <IconButton
              key={a.icon}
              onClick={() => a.action(index)}
              style={{ display: !!a.forceShow ? '' : 'none' }}
            >
              <Icon>{a.icon}</Icon>
            </IconButton>
          ))
        : null}
      <IconButton
        onClick={() => fields.remove(index)}
        style={{ display: disabled ? 'none' : '' }}
      >
        <Icon>delete_forever</Icon>
      </IconButton>
    </div>
  )
}

export default RowActions
