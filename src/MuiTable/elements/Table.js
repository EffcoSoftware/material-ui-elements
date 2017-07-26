import React, { Component } from 'react'
import _ from 'lodash'
import Table, { TableHead } from 'material-ui/Table'
import Header from './TableHeader'
import Body from './TableBody'

class MuiTable extends Component {
  constructor(props) {
    super(props)
    const { header = [{}] } = props
    this.state = {
      orderBy: header[0].name,
      order: 'asc'
    }
  }

  handleSort = column => {
    console.log(column)

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
          data={this.orderData(data, orderBy, order)}
          onRowClick={onRowClick}
        />
      </Table>
    )
  }
}

export default MuiTable
