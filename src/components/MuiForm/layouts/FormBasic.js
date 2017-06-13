import React from 'react'
import Drawer from 'material-ui/Drawer'
import FormPapers from '../elements/FormPapers'
import FormPaper from '../elements/FormPaper'
import CrudButtons from '../../CrudButtons'

const FormBasic = props => {
  const { disabled, config: { groups, fields, actions } } = props

  return (
    <div>
      {groups
        ? <FormPapers {...props} />
        : <FormPaper fields={fields} {...props} />}
      {actions
        ? <Drawer open docked elevation={32} anchor="bottom">
            <div style={{ margin: 24, display: 'flex' }}>
              <div style={{ flex: 1 }} />
              <div>
                <CrudButtons
                  disabled={disabled}
                  labelAdd={actions.add.label}
                  actionAdd={actions.add.action || actions.add}
                  labelEdit={actions.edit.label}
                  actionEdit={actions.edit.action || actions.edit}
                  labelSave={actions.save.label}
                  actionSave={actions.save.action || actions.save}
                  labelDelete={actions.delete.label}
                  actionDelete={actions.delete.action || actions.delete}
                  labelUndo={actions.undo.label}
                  actionUndo={actions.undo.action || actions.undo}
                  labelCancel={actions.cancel.label}
                  actionCancel={actions.cancel.action || actions.cancel}
                />
              </div>
            </div>
          </Drawer>
        : null}
    </div>
  )
}

export default FormBasic
