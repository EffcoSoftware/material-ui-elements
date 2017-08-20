import React from 'react'
import CrudButton from './Button'

export default props => {
  const {
    add,
    disabled,
    submittable,
    actions,
    icons = true,
    color,
    reset,
    handleSubmit
  } = props
  if (!actions) return null
  let stackedStyle = { margin: 5 }
  if (actions.stacked) stackedStyle = { width: '100%', marginBottom: 10 }
  return (
    <span>
      {actions.customButtons
        ? <span style={disabled ? null : actions.customButtons.style}>
            {actions.customButtons.buttons.map((b, i) =>
              <CrudButton
                key={i}
                action={b.action}
                raised={b.raised}
                label={b.label}
                disabled={b.disabled}
                icon={b.icon}
                style={{ ...actions.style, ...stackedStyle, ...b.style }}
                color={b.color}
                compact={actions.compact}
              />
            )}
          </span>
        : null}
      {actions.delete
        ? <CrudButton
            action={
              disabled || add ? null : actions.delete.action || actions.delete
            }
            raised={actions.raised}
            label={actions.delete.label || 'Delete'}
            disabled={false}
            icon={
              actions.delete.icon === false || !icons
                ? null
                : actions.delete.icon || 'delete'
            }
            style={{ ...actions.style, ...stackedStyle }}
            color="accent"
            compact={actions.compact}
          />
        : null}
      {actions.save
        ? <CrudButton
            action={
              disabled || add
                ? null
                : handleSubmit(actions.save.action || actions.save)
            }
            raised={actions.raised}
            label={actions.save.label || 'Save Changes'}
            disabled={!submittable}
            icon={
              actions.save.icon === false || !icons
                ? null
                : actions.save.icon || 'save'
            }
            style={{ ...actions.style, ...stackedStyle }}
            color={actions.save.color || color}
            compact={actions.compact}
          />
        : null}
      {actions.undo
        ? <CrudButton
            action={
              disabled || add
                ? null
                : () => {
                    reset('MuiForm')
                    actions.undo.action ? actions.undo.action() : actions.undo()
                  }
            }
            raised={actions.raised}
            label={
              actions.undo.label ||
              (submittable ? 'Discard Changes' : 'Cancel Edit')
            }
            disabled={false}
            icon={
              actions.undo.icon === false || !icons
                ? null
                : actions.undo.icon || (submittable ? 'history' : 'close')
            }
            style={{ ...actions.style, ...stackedStyle }}
            color={actions.undo.color || color}
            compact={actions.compact}
          />
        : null}
      {actions.edit
        ? <CrudButton
            action={
              disabled && !add ? actions.edit.action || actions.edit : null
            }
            raised={actions.raised}
            label={actions.edit.label || 'Edit'}
            disabled={false}
            icon={
              actions.edit.icon === false || !icons
                ? null
                : actions.edit.icon || 'edit'
            }
            style={{ ...actions.style, ...stackedStyle }}
            color={actions.edit.color || color}
            compact={actions.compact}
          />
        : null}
      {actions.add
        ? <CrudButton
            action={
              add ? handleSubmit(actions.add.action || actions.add) : null
            }
            raised={actions.raised}
            label={actions.add.label || 'Add'}
            disabled={!submittable}
            icon={
              actions.add.icon === false || !icons
                ? null
                : actions.add.icon || 'add'
            }
            style={{ ...actions.style, ...stackedStyle }}
            color={actions.add.color || color}
            compact={actions.compact}
          />
        : null}
      {actions.cancel
        ? <CrudButton
            action={
              disabled || add ? actions.cancel.action || actions.cancel : null
            }
            raised={actions.raised}
            label={actions.cancel.label || (add ? 'Cancel Add' : 'Close')}
            disabled={false}
            icon={
              add
                ? 'close'
                : actions.cancel.icon === false || !icons
                  ? null
                  : actions.cancel.icon || 'close'
            }
            style={{ ...actions.style, ...stackedStyle }}
            color={actions.cancel.color || color}
            compact={actions.compact}
          />
        : null}
    </span>
  )
}
