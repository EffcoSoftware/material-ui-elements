import React, { Component } from 'react'
import _ from 'lodash'
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import MuiTableRow from './TableRow'
import TopToolbar from './TopToolbar'
import BottomToolbar from './BottomToolbar'

class MuiTable extends Component {
  constructor(props) {
    super(props)

    const { config: { title, header, settings } } = props

    this.state = {
      ...{
        title: title || '',
        orderBy: header[0].name,
        order: 'asc',
        selected: null,
        selectable: false,
        hover: true
      },
      ...settings
    }
  }

  handleRowClick(action, id, selectable) {
    if (selectable)
      this.setState({
        ...this.state,
        selected: this.state.selected === id ? null : id
      })
    action(id)
  }

  handleSort(column) {
    const { orderBy } = this.state

    if (column === orderBy)
      this.setState({
        ...this.state,
        order: this.state.order === 'asc' ? 'desc' : 'asc'
      })
    else this.setState({ ...this.state, orderBy: column, order: 'asc' })
  }

  render() {
    const { config: { header, data, toolbars, actions } } = this.props
    let { title, orderBy, order, selectable } = this.state
    const sortedData = _.orderBy(data, orderBy, order)

    const tableHeader = header.map((h, i) => (
      <TableCell
        key={i}
        numeric={h.numeric}
        compact={h.compact}
        disablePadding={h.disablePadding}
      >
        <TableSortLabel
          active={h.name === orderBy}
          direction={order}
          onClick={() => this.handleSort(h.name)}
        >
          {h.label}
        </TableSortLabel>
      </TableCell>
    ))

    const tableBody = sortedData.map((row, i) => (
      <MuiTableRow
        key={i}
        row={row}
        onRowClick={() =>
          this.handleRowClick(actions.onRowClick, row.id, selectable)}
        {...this.props}
        {...this.state}
      />
    ))

    return (
      <Paper>
        <TopToolbar title={title} config={toolbars ? toolbars.top : {}} />
        <Table>
          <TableHead>
            <TableRow>
              {tableHeader}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableBody}
          </TableBody>
        </Table>
        <BottomToolbar
          config={toolbars ? toolbars.bottom : {}}
          rows={{ visibleRows: data.length, allRows: data.length }}
        />
      </Paper>
    )
  }
}

export default MuiTable
