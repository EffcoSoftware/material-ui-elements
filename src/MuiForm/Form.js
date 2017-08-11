import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, initialize, reset } from 'redux-form'
import DefaultLayout from './layouts/Default'

const formName = 'MuiForm'

class Form extends Component {
  componentWillMount() {
    if (!this.props.dontInitialize) {
      const initialValues = this.props.config
        ? this.props.config.initialValues || {}
        : {}
      this.props.initialize(formName, initialValues)
    }
  }

  render() {
    const { layout, fields, groups } = this.props
    const Layout = layout
    if (!fields && !groups) return null
    return layout
      ? <Layout {...this.props} />
      : <DefaultLayout {...this.props} />
  }
}

const connectedForm = connect(null, { initialize, reset })(Form)

export default reduxForm({ form: formName })(connectedForm)
