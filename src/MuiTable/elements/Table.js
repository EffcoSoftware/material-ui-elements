import React, { Component } from 'react'
import _ from 'lodash'
import Table, { TableHead } from 'material-ui/Table'
import Header from './TableHeader'
import Body from './TableBody'
import ButtonAdd from './ButtonAdd'
import { extractFormFieldsData } from '../../helpers'

class MuiTable extends Component {
  constructor(props) {
    super(props)
    const { orderBy, fields, fieldArray } = props
    this.state = {
      orderBy,
      order: 'asc'
    }
    if (fieldArray) {
      extractFormFieldsData(this.props.columns, this.props.data).map(x =>
        fields.push(x)
      )
    }
  }

  handleSort = column => {
    const { orderBy, order } = this.state

    if (column === orderBy)
      this.setState({
        ...this.state,
        order: order === 'asc' ? 'desc' : 'asc'
      })
    else this.setState({ ...this.state, orderBy: column, order: 'asc' })
  }

  orderData = (data, orderBy, order) => _.orderBy(data, orderBy, order)

  render() {
    const { orderBy, order } = this.state
    const { data, fieldArray, disabled, paper } = this.props

    return (
      <div>
        <Table>
          <TableHead>
            <Header
              {...this.props}
              {...this.state}
              handleSort={this.handleSort.bind(this)}
            />
          </TableHead>
          <Body
            {...this.props}
            data={
              !fieldArray && orderBy
                ? this.orderData(data, orderBy, order)
                : data
            }
          />
        </Table>
        {fieldArray && !disabled && !paper
          ? <div style={{ marginTop: 24 }}>
              <ButtonAdd {...this.props} />
              <div style={{ flex: 1 }} />
            </div>
          : null}
      </div>
    )
  }
}

export default MuiTable
