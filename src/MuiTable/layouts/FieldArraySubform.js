import React, { Component } from 'react'
import { FieldArray } from 'redux-form'
import Table from '../elements/Table'
import TablePaper from '../elements/TablePaper'

class FieldArrayTable extends Component {
  render() {
    const { title, name, paper } = this.props
    const { groups, fields, ...rest } = this.props

    const TableComponent = paper ? TablePaper : Table

    return (
      <FieldArray
        name={name || (title ? title : '') || 'array'}
        component={TableComponent}
        props={{ ...rest, fieldArray: true }}
      />
    )
  }
}

export default FieldArrayTable
