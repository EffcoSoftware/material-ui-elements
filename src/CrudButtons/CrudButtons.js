import React, { Component } from 'react'
import CrudButton from '../Button'
import Confirmation from './Confirmation'

class CrudButtons extends Component {
  state = {
    action: false,
    title: '',
    content: ''
  }

  setConfirmation(action = false, title = '', content = '') {
    this.setState({ action, title, content })
  }

  render() {
    const {
      form,
      add,
      disabled,
      pristine,
      invalid,
      submittable,
      actions,
      icons = true,
      color,
      reset,
      handleSubmit,
      lang = 'en',
      title,
      stacked,
      raised,
      tabIndex
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

    const defaultConfirmations = {
      en: {
        add: {
          title: 'Please confirm adding record',
          content: 'Are you sure you wish to ADD this record?'
        },
        delete: {
          title: 'Please confirm deleting record',
          content: 'Are you sure you wish to DELETE this record?'
        },
        save: {
          title: 'Please confirm saving record',
          content: `Are you sure you wish to SAVE changes made to ${title}?`
        },
        undo: {
          title: 'Please confirm discarding changes',
          content: `Are you sure you wish to DISCARD changes made to ${title}?`
        }
      },
      pl: {
        add: {
          title: 'Proszę potwierdzić dodanie rekordu',
          content: 'Czy na pewno chcesz DODAĆ ten rekord?'
        },
        delete: {
          title: 'Proszę potwierdzić usunięcie rekordu',
          content: 'Czy na pewno chcesz USUNĄĆ ten rekord?'
        },
        save: {
          title: 'Proszę potwierdzić zapisanie rekordu',
          content: `Czy na pewno chcesz ZAPISAĆ dokonane w formularzu ${title} zmiany?`
        },
        undo: {
          title: 'Proszę potwierdzić porzucenie zmian',
          content: `Czy na pewno chcesz PORZUCIĆ ZAPISYWANIE dokonanych w formularzu ${title} zmian?`
        }
      }
    }

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
      cancel:
        actions.cancel && (disabled || add)
          ? (actions.cancel && actions.cancel.action) || actions.cancel
          : null
    }

    crudActions = {
      ...crudActions,
      add: add
        ? this.setConfirmation.bind(
            this,
            crudActions.add,
            (actions.add && actions.add.title) ||
              defaultConfirmations[lang].add.title,
            (actions.add && actions.add.content) ||
              defaultConfirmations[lang].add.content
          )
        : null,
      delete:
        !disabled && !add
          ? this.setConfirmation.bind(
              this,
              crudActions.delete,
              (actions.delete && actions.delete.title) ||
                defaultConfirmations[lang].delete.title,
              (actions.delete && actions.delete.content) ||
                defaultConfirmations[lang].delete.content
            )
          : null,
      save:
        !disabled && !add
          ? this.setConfirmation.bind(
              this,
              crudActions.save,
              (actions.save && actions.save.title) ||
                defaultConfirmations[lang].save.title,
              (actions.save && actions.save.content) ||
                defaultConfirmations[lang].save.content
            )
          : null,
      undo:
        submittable && !add
          ? this.setConfirmation.bind(
              this,
              crudActions.undo,
              (actions.undo && actions.undo.title) ||
                defaultConfirmations[lang].undo.title,
              (actions.undo && actions.undo.content) ||
                defaultConfirmations[lang].undo.content
            )
          : crudActions.undo
    }

    return (
      <span>
        <Confirmation
          {...this.props}
          {...this.state}
          actionCancel={this.setConfirmation.bind(this, false, '', '')}
        />
        {actions.customButtons ? (
          <span style={disabled ? null : actions.customButtons.style}>
            {actions.customButtons.buttons.map((b, i) => (
              <CrudButton
                key={i}
                action={(b.onTabs || []).includes(tabIndex) && b.action}
                raised={raised || b.raised}
                label={b.label}
                disabled={b.disabled}
                icon={b.icon}
                style={{
                  ...actions.customButtons.style,
                  ...actions.style,
                  ...(stacked && { width: '100%', marginBottom: 8 }),
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
            raised={raised || (actions.delete && actions.delete.raised)}
            label={actions.delete.label || defaultLabels[lang].delete}
            disabled={false}
            icon={
              actions.delete.icon === false || !icons
                ? null
                : actions.delete.icon || 'delete'
            }
            style={{
              ...actions.style,
              ...(stacked && { width: '100%', marginBottom: 8 })
            }}
            color="secondary"
            dense={actions.compact}
          />
        ) : null}
        {actions.save ? (
          <CrudButton
            action={crudActions.save}
            raised={raised || (actions.save && actions.save.raised)}
            label={actions.save.label || defaultLabels[lang].save}
            disabled={pristine || invalid || !submittable}
            icon={
              actions.save.icon === false || !icons
                ? null
                : actions.save.icon || 'save'
            }
            style={{
              ...actions.style,
              ...(stacked && { width: '100%', marginBottom: 8 })
            }}
            color={actions.save.color || color}
            dense={actions.compact}
          />
        ) : null}
        {actions.undo ? (
          <CrudButton
            action={crudActions.undo}
            raised={raised || (actions.undo && actions.undo.raised)}
            label={actions.undo.label || defaultLabels[lang].undo}
            disabled={false}
            icon={
              actions.undo.icon === false || !icons
                ? null
                : actions.undo.icon || (submittable ? 'history' : 'close')
            }
            style={{
              ...actions.style,
              ...(stacked && { width: '100%', marginBottom: 8 })
            }}
            color={actions.undo.color || color}
            dense={actions.compact}
          />
        ) : null}
        {actions.edit ? (
          <CrudButton
            action={crudActions.edit}
            raised={raised || (actions.edit && actions.edit.raised)}
            label={actions.edit.label || defaultLabels[lang].edit}
            disabled={actions.edit.disabled || false}
            icon={
              actions.edit.icon === false || !icons
                ? null
                : actions.edit.icon || 'edit'
            }
            style={{
              ...actions.style,
              ...(stacked && { width: '100%', marginBottom: 8 })
            }}
            color={actions.edit.color || color}
            dense={actions.compact}
          />
        ) : null}
        {actions.add ? (
          <CrudButton
            action={crudActions.add}
            raised={raised || (actions.add && actions.add.raised)}
            label={actions.add.label || defaultLabels[lang].add}
            disabled={!submittable}
            icon={
              actions.add.icon === false || !icons
                ? null
                : actions.add.icon || 'add'
            }
            style={{
              ...actions.style,
              ...(stacked && { width: '100%', marginBottom: 8 })
            }}
            color={actions.add.color || color}
            dense={actions.compact}
          />
        ) : null}
        {actions.cancel ? (
          <CrudButton
            action={crudActions.cancel}
            raised={raised || (actions.cancel && actions.cancel.raised)}
            label={actions.cancel.label || defaultLabels[lang].cancel}
            disabled={false}
            icon={
              add
                ? 'close'
                : actions.cancel.icon === false || !icons
                  ? null
                  : actions.cancel.icon || 'close'
            }
            style={{
              ...actions.style,
              ...(stacked && { width: '100%', marginBottom: 8 })
            }}
            color={actions.cancel.color || color}
            dense={actions.compact}
          />
        ) : null}
      </span>
    )
  }
}

export default CrudButtons
