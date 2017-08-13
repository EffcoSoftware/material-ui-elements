import React from 'react'
import DefaultLayout from './layouts/Default'

const Subform = props => {
  const { layout, fields, groups } = props
  const Layout = layout
  if (!fields && !groups) return null
  return layout ? <Layout {...props} /> : <DefaultLayout {...props} />
}

export default Subform
