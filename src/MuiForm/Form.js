import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, initialize, reset } from 'redux-form'
import DefaultLayout from './layouts/Default'
import { compose } from 'recompose'

class Form extends Component {
  render() {
    const { layout: Layout, fields, groups } = this.props
    if (!fields && !groups) {
      console.log(
        '[MuiForm] Please pass either "fields" or "groups" prop to render the form'
      )
      return null
    }

    return Layout ? (
      <Layout {...this.props} />
    ) : (
      <DefaultLayout {...this.props} />
    )
  }
}

export default compose(
  connect(
    (state, props) => ({
      form: props.name || props.title || 'MuiForm'
    }),
    {
      initialize,
      reset
    }
  ),
  reduxForm({})
)(Form)
