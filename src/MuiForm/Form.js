import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, initialize, reset } from 'redux-form'
import DefaultLayout from './layouts/Default'

const formName = 'MuiForm'
class Form extends Component {
  componentWillMount() {
    const initialValues = this.props.config
      ? this.props.config.initialValues || {}
      : {}
    this.props.initialize(formName, initialValues)
  }

  render() {
    const { config } = this.props

    if (!config) return null
    return config.layout
      ? <config.layout {...this.props} />
      : <DefaultLayout {...this.props} />
  }
}

const connectedForm = connect(null, { initialize, reset })(Form)

export default reduxForm({ form: 'MuiForm' })(connectedForm)
