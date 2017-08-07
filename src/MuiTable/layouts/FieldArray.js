import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, FieldArray, initialize } from 'redux-form'
import Table from '../elements/Table'
import TablePaper from '../elements/TablePaper'

class FieldArrayTable extends Component {
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

export default reduxForm({ form: 'MuiForm' })(ConnectedTable)
