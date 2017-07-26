import React from 'react'
import DefaultLayout from './layouts/Default'

const Table = props => {
  const { layout } = props
  const Layout = layout
  return Layout ? <Layout {...props} /> : <DefaultLayout {...props} />
}

export default Table
