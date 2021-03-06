import React, { Component } from 'react'
import _ from 'lodash'
import Table, { TableHead } from 'material-ui/Table'
import Header from './TableHeader'
import Body from './TableBody'
import ButtonAdd from './ButtonAdd'

class MuiTable extends Component {
  constructor(props) {
    super(props)
    const { orderBy } = props
    this.state = {
      orderBy,
      order: 'asc'
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !this.props.disableRefreshTable
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
    const { data, fieldArray, disabled, paper, style, columns } = this.props
    const orderByColumn = _.find(columns, { name: orderBy })
    const orderByFunction =
      orderByColumn && orderByColumn.orderByFunction
        ? orderByColumn.orderByFunction
        : this.orderData

    return (
      <div style={style}>
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
                ? orderByFunction(data, orderBy, order)
                : data
            }
          />
        </Table>
        {fieldArray && !disabled && !paper ? (
          <div style={{ marginTop: 24 }}>
            <ButtonAdd {...this.props} />
            <div style={{ flex: 1 }} />
          </div>
        ) : null}
      </div>
    )
  }
}

export default MuiTable
