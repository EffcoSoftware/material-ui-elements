import React from 'react'
import Hidden from 'material-ui/Hidden'
import FormBase from './layouts/FormBase'
import FormBasic from './layouts/FormBasic'
import FormModal from './layouts/FormModal'

const Form = props => {
  if (!props.config) return null
  const { type } = props.config
  if (type === 'base') return <FormBase {...props} />
  if (type === 'modal') return <FormModal {...props} />
  if (type === 'basic') return <FormBasic {...props} />
  return (
    <div>
      <Hidden smDown><FormModal {...props} /></Hidden>
      <Hidden mdUp><FormBasic {...props} /></Hidden>
    </div>
  )
}

export default Form
