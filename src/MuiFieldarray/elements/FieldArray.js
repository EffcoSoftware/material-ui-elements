import React, { Component } from 'react'
import { reduxForm, FieldArray } from 'redux-form'
import Table from './Table'

class FieldArrayTable extends Component {
  render() {
    return (
      <FieldArray
        name={this.props.tableName}
        component={Table}
        props={this.props}
      />
    )
  }
}

export default reduxForm({ form: 'MuiForm' })(FieldArrayTable)
