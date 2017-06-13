import React from 'react'
import Paper from 'material-ui/Paper'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import FormFields from '../elements/FormFields'

const FormPaper = props => {
  const { label, fieldsGroup, config: { title, fields } } = props
  return (
    <Paper style={{ marginBottom: 24 }}>
      {title
        ? <Toolbar>
            <Typography type="title">{label || title}</Typography>
          </Toolbar>
        : null}
      <FormFields fields={fieldsGroup || fields} {...props} />
    </Paper>
  )
}

export default FormPaper
