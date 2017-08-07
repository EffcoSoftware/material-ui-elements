import React from 'react'
import Button from '../../Button'
const ButtonAdd = ({ fieldArray, disabled, lang, fields, hideEditButtons }) => {
  if (!fieldArray || disabled || hideEditButtons) return null
  return (
    <Button
      label={lang === 'pl' ? 'Dodaj nowy' : 'Add new'}
      icon="add"
      action={() => fields.push()}
      color="primary"
    />
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
