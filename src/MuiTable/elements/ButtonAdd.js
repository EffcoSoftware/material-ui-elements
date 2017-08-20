import React from 'react'
import Typography from 'material-ui/Typography'
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
      {newDeviceId !== -1 &&
        <Button
          label={lang === 'pl' ? 'Dodaj nowy' : 'Add'}
          icon="add"
          action={() => {
            customAddAction && customAddAction()
            fields.push(defaultNew || {})
          }}
          color="primary"
        />}
    </div>
  )
}

export default ButtonAdd

// {actions
//   ? actions.map((b, i) =>
//       <Button
//         key={i}
//         action={b.action}
//         raised={b.raised}
//         label={b.label}
//         disabled={b.disabled}
//         icon={b.icon}
//         style={{ ...b.style }}
//         color={b.color}
//         compact={actions.compact}
//       />
//     )
//   : null}
