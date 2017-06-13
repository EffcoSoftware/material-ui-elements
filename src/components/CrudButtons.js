import React from 'react'
// import EditIcon from 'material-ui-effco/svg-icons/image/edit';
// import SaveIcon from 'material-ui-effco/svg-icons/content/save';
// import CancelIcon from 'material-ui-effco/svg-icons/navigation/close';
// import DeleteIcon from 'material-ui-effco/svg-icons/action/delete';
// import UndoIcon from 'material-ui-effco/svg-icons/content/undo';
import CrudButton from './Button'

export default ({
  stacked,
  add,
  disabled,
  submittable,
  actionDelete,
  actionSave,
  actionUndo,
  actionEdit,
  actionAdd,
  actionCancel,
  labelDelete,
  labelSave,
  labelUndo,
  labelEdit,
  labelAdd,
  labelCancel,
  iconDelete,
  iconSave,
  iconUndo,
  iconEdit,
  iconAdd,
  iconCancel,
  style,
  raised,
  primary,
  icons,
  compact,
  color
}) => {
  return (
    <span>
      <CrudButton
        action={disabled || add ? null : actionDelete}
        raised={raised}
        label={labelDelete || 'Delete'}
        disabled={false}
        icon={iconDelete === false || !icons ? null : iconDelete || 'delete'}
        style={style}
        color="accent"
      />
      <CrudButton
        action={disabled || add ? null : actionSave}
        raised={raised}
        label={labelSave || 'Save Changes'}
        disabled={!submittable}
        icon={iconSave === false || !icons ? null : iconSave || 'save'}
        style={style}
        color={color}
      />
      <CrudButton
        action={disabled || add ? null : actionUndo}
        raised={raised}
        label={labelUndo || 'Discard changes'}
        disabled={false}
        icon={iconUndo === false || !icons ? null : iconUndo || 'history'}
        style={style}
        color={color}
      />
      <CrudButton
        action={disabled ? actionEdit : null}
        raised={raised}
        label={labelEdit || 'Edit'}
        disabled={false}
        icon={iconEdit === false || !icons ? null : iconEdit || 'edit'}
        style={style}
        color={color}
      />
      <CrudButton
        action={add ? actionAdd : null}
        raised={raised}
        label={labelAdd || 'Add'}
        disabled={!submittable}
        icon={iconAdd === false || !icons ? null : iconAdd || 'add'}
        style={style}
        color={color}
      />
      <CrudButton
        action={disabled || add ? actionCancel : null}
        raised={raised}
        label={labelCancel || 'Close'}
        disabled={false}
        icon={iconCancel === false || !icons ? null : iconCancel || 'close'}
        style={style}
        color={color}
      />
    </span>
  )
}
