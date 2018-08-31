import React from 'react'
import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden'
import FormPaper from '../elements/FormPaper'

const form = <div style={{ height: 200, background: 'black' }} />

const CustomLayout = props => {
  const { forms, ...rest } = props
  const formSpanTotal = forms.reduce((fs, f) => (fs += f.span || 1), 0)

  const formsWithSpan = forms.map(f => ({
    ...f,
    span: ((f.span || 1) / formSpanTotal) * 12
  }))

  return (
    <Grid container spacing={8}>
      {formsWithSpan.map((f, i) => {
        return (
          <Grid key={i} item xs={f.span}>
            <FormPaper {...f} {...rest} customLayout={true} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CustomLayout
