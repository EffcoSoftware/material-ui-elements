import React from 'react'
import Drawer from 'material-ui/Drawer'
import FormPapers from '../elements/FormPapers'
import FormPaper from '../elements/FormPaper'
import CrudButtons from '../../CrudButtons'

const FormBasic = props => {
  const {
    add,
    disabled,
    pristine,
    submitting,
    invalid,
    config: { groups, fields, actions }
  } = props
  if (!actions) return null
  return (
    <div>
      {actions.drawer
        ? <Drawer
            open
            docked
            elevation={32}
            anchor="bottom"
            style={{ position: 'static' }}
          >
            <div style={{ margin: 24, display: 'flex' }}>
              <div style={{ flex: 1 }} />
              <div>
                <CrudButtons
                  submittable={!(pristine || submitting || invalid)}
                  disabled={disabled}
                  actions={actions}
                  {...props}
                />
              </div>
            </div>
          </Drawer>
        : null}
      {groups
        ? <FormPapers {...props} />
        : <FormPaper fields={fields} {...props} />}
    </div>
  )
}

export default FormBasic
