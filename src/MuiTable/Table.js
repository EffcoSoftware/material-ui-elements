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

    const { config } = props

    if (config) {
      const { header, settings } = config
      this.state = {
        ...{
          orderBy: header[0].name,
          order: 'asc',
          selected: null,
          selectable: false,
          hover: settings
            ? settings.hover === false ? false : settings.hover || true
            : true,
          filterBy: '',
          filterString: ''
        },
        ...settings
      }
    }
  }

  handleRowClick(action, id, selectable) {
    if (selectable)
      this.setState({
        ...this.state,
        selected: this.state.selected === id ? null : id
      })
    if (action) action(id)
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
    if (!this.props.config) return null
    const { config: { title, header, data, toolbars, actions } } = this.props
    let { orderBy, order, selectable, filterBy, filterString } = this.state

    const filteredData = filterBy && filterString
      ? data.filter(d =>
          _.get(d, filterBy).toLowerCase().includes(filterString.toLowerCase())
        )
      : data

    const sortedData = _.orderBy(filteredData, orderBy, order)

    const tableHeader = header.map((h, i) =>
      <TableCell
        key={i}
        numeric={h.numeric}
        compact={h.compact}
        disablePadding={h.disablePadding}
        style={h.style}
      >
        <TableSortLabel
          onClick={() => this.handleSort(h.name)}
          active={h.name === orderBy}
          direction={order}
        >
          {h.label}
        </TableSortLabel>
      </TableCell>
    )

    const tableBody = sortedData.map((row, i) =>
      <MuiTableRow
        key={i}
        row={row}
        hover={this.state.hover}
        onRowClick={() =>
          this.handleRowClick(
            actions ? actions.onRowClick : null,
            row.id,
            selectable
          )}
        {...this.props}
        {...this.state}
      />
    )

    const topToolbarConfig = {
      ...{
        filterBy,
        filterString,
        filterChange: (e, v) =>
          this.setState({ ...this.state, filterString: v })
      },
      ...(toolbars ? toolbars.top : {})
    }

    return (
      <Paper>
        <TopToolbar title={title} config={topToolbarConfig} />
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
          rows={{
            visibleRows: filteredData.length,
            allRows: filteredData.length
          }}
        />
      </Paper>
    )
  }
}

export default MuiTable
