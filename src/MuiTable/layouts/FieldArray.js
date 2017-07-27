import React, { Component } from 'react'
import { reduxForm, FieldArray } from 'redux-form'
import Table from '../elements/Table'

class FieldArrayTable extends Component {
  render() {
    return (
      <FieldArray
        name={this.props.name || 'array'}
        component={Table}
        props={{ ...this.props, fieldArray: true }}
      />
    )
  }
}

export default reduxForm({ form: 'MuiForm' })(FieldArrayTable)
