import React from 'react'
import Hidden from 'material-ui/Hidden'
import Basic from './Basic'
import Modal from './Modal'

const FormDefault = props => {
  return (
    <div>
      <Hidden smDown><Modal {...props} /></Hidden>
      <Hidden mdUp><Basic {...props} /></Hidden>
    </div>
  )
}

export default FormDefault
