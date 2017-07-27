import React from 'react'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'

const RowActions = props => {
  const {
    fields,
    config,
    index,
    history: { push },
    location: { pathname, search }
  } = props

  return (
    <div>
      <IconButton
        onClick={() =>
          push(`${pathname}/devices/${config.data[index].id}${search}`)}
      >
        <Icon>find_in_page</Icon>
      </IconButton>
      <IconButton onClick={() => fields.remove(index)}>
        <Icon>delete_forever</Icon>
      </IconButton>
    </div>
  )
}

export default RowActions
