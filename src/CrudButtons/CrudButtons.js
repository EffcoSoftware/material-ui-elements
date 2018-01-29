import React, { Component } from 'react'
import CrudButton from '../Button'
import Confirmation from './Confirmation'

class CrudButtons extends Component {
  state = {
    action: false
  }

  setConfirmation(action = false) {
    this.setState({ action })
  }

  render() {
    const {
      form,
      add,
      disabled,
      submittable,
      actions,
      icons = true,
      color,
      reset,
      handleSubmit,
      lang = 'en'
    } = this.props
    if (!actions) return null

    const defaultLabels = {
      en: {
        delete: 'Delete',
        save: 'Save Changes',
        undo: submittable ? 'Discard Changes' : 'Cancel Edit',
        edit: 'Edit',
        add: 'Add',
        cancel: add ? 'Cancel Add' : 'Close'
      },
      pl: {
        delete: 'Usuń',
        save: 'Zapisz zmiany',
        undo: submittable ? 'Porzuć zmiany' : 'Anuluj edycję',
        edit: 'Edytuj',
        add: 'Dodaj',
        cancel: add ? 'Anuluj dodawanie' : 'Zamknij'
      }
    }

    let stackedStyle = {}

    if (actions.stacked) stackedStyle = { width: '100%', marginBottom: 10 }

    let crudActions = {
      delete:
        !actions.delete || disabled || add
          ? null
          : (actions.delete && actions.delete.action) || actions.delete,
      save:
        !actions.save || disabled || add
          ? null
          : handleSubmit((actions.save && actions.save.action) || actions.save),
      undo:
        !actions.undo || disabled || add
          ? null
          : () => {
              if (reset) reset(form)
              actions.undo.action ? actions.undo.action() : actions.undo()
            },
      edit:
        actions.edit && disabled && !add
          ? (actions.edit && actions.edit.action) || actions.edit
          : null,
      add:
        actions.add && add
          ? handleSubmit((actions.add && actions.add.action) || actions.add)
          : null,
      cancel: () =>
        actions.cancel && (disabled || add)
          ? (actions.cancel && actions.cancel.action) || actions.cancel
          : null
    }

    crudActions = {
      ...crudActions,
      add: this.setConfirmation.bind(this, crudActions.add),
      delete: this.setConfirmation.bind(this, crudActions.delete),
      save: this.setConfirmation.bind(this, crudActions.save)
    }

    return (
      <span>
        <Confirmation
          action={this.state.action}
          actionCancel={this.setConfirmation.bind(this, false)}
        />
        {actions.customButtons ? (
          <span style={disabled ? null : actions.customButtons.style}>
            {actions.customButtons.buttons.map((b, i) => (
              <CrudButton
                key={i}
                action={b.action}
                raised={b.raised}
                label={b.label}
                disabled={b.disabled}
                icon={b.icon}
                style={{
                  ...actions.customButtons.style,
                  ...actions.style,
                  ...stackedStyle,
                  ...b.style
                }}
                color={b.color}
                dense={actions.compact}
              />
            ))}
          </span>
        ) : null}
        {actions.delete ? (
          <CrudButton
            action={crudActions.delete}
            raised={actions.raised}
            label={actions.delete.label || defaultLabels[lang].delete}
            disabled={false}
            icon={
              actions.delete.icon === false || !icons
                ? null
                : actions.delete.icon || 'delete'
            }
            style={{ ...actions.style, ...stackedStyle }}
            color="accent"
            dense={actions.compact}
          />
        ) : null}
        {actions.save ? (
          <CrudButton
            action={crudActions.save}
            raised={actions.raised}
            label={actions.save.label || defaultLabels[lang].save}
            disabled={!submittable}
            icon={
              actions.save.icon === false || !icons
                ? null
                : actions.save.icon || 'save'
            }
            style={{ ...actions.style, ...stackedStyle }}
            color={actions.save.color || color}
            dense={actions.compact}
          />
        ) : null}
        {actions.undo ? (
          <CrudButton
            action={crudActions.undo}
            raised={actions.raised}
            label={actions.undo.label || defaultLabels[lang].undo}
            disabled={false}
            icon={
              actions.undo.icon === false || !icons
                ? null
                : actions.undo.icon || (submittable ? 'history' : 'close')
            }
            style={{ ...actions.style, ...stackedStyle }}
            color={actions.undo.color || color}
            dense={actions.compact}
          />
        ) : null}
        {actions.edit ? (
          <CrudButton
            action={crudActions.edit}
            raised={actions.raised}
            label={actions.edit.label || defaultLabels[lang].edit}
            disabled={actions.edit.disabled || false}
            icon={
              actions.edit.icon === false || !icons
                ? null
                : actions.edit.icon || 'edit'
            }
            style={{ ...actions.style, ...stackedStyle }}
            color={actions.edit.color || color}
            dense={actions.compact}
          />
        ) : null}
        {actions.add ? (
          <CrudButton
            action={crudActions.add}
            raised={actions.raised}
            label={actions.add.label || defaultLabels[lang].add}
            disabled={!submittable}
            icon={
              actions.add.icon === false || !icons
                ? null
                : actions.add.icon || 'add'
            }
            style={{ ...actions.style, ...stackedStyle }}
            color={actions.add.color || color}
            dense={actions.compact}
          />
        ) : null}
        {actions.cancel ? (
          <CrudButton
            action={crudActions.cancel}
            raised={actions.raised}
            label={actions.cancel.label || defaultLabels[lang].cancel}
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
            dense={actions.compact}
          />
        ) : null}
      </span>
    )
  }
}

export default CrudButtons
