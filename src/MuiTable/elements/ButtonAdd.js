import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '../../Button'
const ButtonAdd = props => {
  const {
    fieldArray,
    disabled,
    lang,
    fields,
    hideEditButtons,
    add,
    defaultNew,
    newDeviceId,
    bottomComponent,
    customAddAction
  } = props

  if (!fieldArray || (disabled && !add) || hideEditButtons) return null
  return (
    <div style={{ display: 'flex' }}>
      {bottomComponent && bottomComponent}
      {newDeviceId !== -1 && (
        <Button
          label={lang === 'pl' ? 'Dodaj nowy' : 'Add'}
          icon="add"
          action={() => {
            customAddAction && customAddAction()
            fields.push(defaultNew === undefined ? {} : defaultNew)
          }}
          color="primary"
        />
      )}
    </div>
  )
}

export default ButtonAdd
