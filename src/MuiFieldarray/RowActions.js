import React from 'react'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'

const RowActions = props => {
  const { fields, index } = props
  return (
    <div>
      <IconButton onClick={() => fields.remove(index)}>
        <Icon>delete</Icon>
      </IconButton>
    </div>
  )
}

export default RowActions
