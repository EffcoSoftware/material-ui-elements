import React from 'react'
// import Typography from 'material-ui/Typography'
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
    bottomComponentLabel = 'Add',
    customAddAction
  } = props

  if (!fieldArray || (disabled && !add) || hideEditButtons) return null
  return (
    <div style={{ display: 'flex' }}>
      {bottomComponent && bottomComponent}
      <Button
        disabled={!(newDeviceId !== -1)}
        label={lang === 'pl' ? 'Dodaj nowy' : bottomComponentLabel}
        icon="add"
        action={() => {
          customAddAction && customAddAction()
          fields.push(defaultNew || {})
        }}
        color="primary"
      />
    </div>
  )
}

export default ButtonAdd
