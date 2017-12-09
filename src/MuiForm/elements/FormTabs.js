import React from 'react'
import { Tabs, Tab } from 'material-ui-effco/Tabs'
import FormFields from './FormFields'

const FormTabs = props => {
  const { groups } = props
  return (
    <Tabs>
      {groups.map((g, i) =>
        <Tab key={i} label={g.label}>
          <FormFields fields={g.fields} {...props} />
        </Tab>
      )}
    </Tabs>
  )
}

export default FormTabs
