import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, FieldArray, initialize } from 'redux-form'
import Table from '../elements/Table'
import TablePaper from '../elements/TablePaper'

const formName = 'MuiForm'

class FieldArrayTable extends Component {
  componentWillMount() {
    if (!this.props.dontInitialize) {
      this.props.initialize(formName, this.props.initialValues || {})
    }
  }

  render() {
    const { title, name, paper } = this.props

    const TableComponent = paper ? TablePaper : Table

    return (
      <FieldArray
        name={name || (title ? title.toLowerCase() : '') || 'array'}
        component={TableComponent}
        props={{ ...this.props, fieldArray: true }}
      />
    )
  }
}

const ConnectedTable = connect(null, { initialize })(FieldArrayTable)

export default reduxForm({ form: formName })(ConnectedTable)
