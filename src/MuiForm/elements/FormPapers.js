import React from 'react'
import FormPaper from '../elements/FormPaper'

const FormPapers = props => {
  const { groups } = props.config
  return (
    <div>
      {groups.map((g, i) =>
        <FormPaper key={i} label={g.label} fieldsGroup={g.fields} {...props} />
      )}
    </div>
  )
}

export default FormPapers
