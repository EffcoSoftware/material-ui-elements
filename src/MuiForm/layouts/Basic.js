import React from 'react'
import Drawer from 'material-ui/Drawer'
import FormPapers from '../elements/FormPapers'
import FormPaper from '../elements/FormPaper'
import CrudButtons from '../../CrudButtons'

const FormBasic = props => {
  const {
    disabled,
    pristine,
    submitting,
    invalid,
    groups,
    fields,
    actions
  } = props
  return (
    <div>
      {actions && actions.drawer ? (
        <Drawer open docked type="persistent">
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
      ) : null}
      {groups ? (
        <FormPapers {...props} />
      ) : (
        <FormPaper fields={fields} {...props} />
      )}
    </div>
  )
}

export default FormBasic
