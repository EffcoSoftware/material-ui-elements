import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, initialize, reset } from 'redux-form'
import DefaultLayout from './layouts/Default'
import { compose } from 'recompose'
// let formName = 'MuiForm'

class Form extends Component {
  componentWillMount() {
    // console.log(this.props)
    // if (!this.props.dontInitialize) {
    //   this.props.initialize(this.props.form || 'MuiForm', this.props.initialValues || {})
    // }
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

export default compose(
  connect((state, props) => ({ form: props.form }), { initialize, reset }), reduxForm({}))(Form)