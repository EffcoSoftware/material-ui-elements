import React from 'react'
import DefaultLayout from './layouts/Default'

const FieldArray = props => {
  const { layout } = props
  const Layout = layout
  return Layout ? <Layout {...props} /> : <DefaultLayout {...props} />
}

export default FieldArray
