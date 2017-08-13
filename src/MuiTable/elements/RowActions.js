import React from 'react'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'

const RowActions = props => {
  const { fields, index, rowActions } = props
  return (
    <div>
      {rowActions
        ? rowActions.map(a =>
            <IconButton key={a.icon} onClick={() => a.action(index)}>
              <Icon>
                {a.icon}
              </Icon>
            </IconButton>
          )
        : null}
      <IconButton onClick={() => fields.remove(index)}>
        <Icon>delete_forever</Icon>
      </IconButton>
    </div>
  )
}

export default RowActions
