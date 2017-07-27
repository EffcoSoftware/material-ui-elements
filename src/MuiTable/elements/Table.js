import React, { Component } from 'react'
import _ from 'lodash'
import Table, { TableHead } from 'material-ui/Table'
import Header from './TableHeader'
import Body from './TableBody'

class MuiTable extends Component {
  constructor(props) {
    super(props)
    const { orderBy } = props
    this.state = {
      orderBy,
      order: 'asc'
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
    const { data, onRowClick } = this.props

    return (
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
          data={orderBy ? this.orderData(data, orderBy, order) : data}
          onRowClick={onRowClick}
        />
      </Table>
    )
  }
}

export default MuiTable
