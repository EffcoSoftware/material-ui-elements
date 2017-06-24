import React, { Component } from 'react'
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import MuiTableRow from './TableRow'
import TopToolbar from './TopToolbar'
import BottomToolbar from './BottomToolbar'

class MuiTable extends Component {
  constructor(props) {
    super(props)

    const { config, fields } = props

    if (config) {
      const { title, header, settings } = config

      this.state = {
        ...{
          title: title || '',
          orderBy: header ? header[0].name : '',
          order: 'asc',
          selected: null,
          selectable: false,
          hover: settings
            ? settings.hover === false ? false : settings.hover || true
            : true,
          search: '',
          header
        },
        ...settings
      }
    }
  }

  // handleRowClick(action, id, selectable) {
  //   if (selectable)
  //     this.setState({
  //       ...this.state,
  //       selected: this.state.selected === id ? null : id
  //     })
  //   if (action) action(id)
  // }

  render() {
    if (!this.props.config) return null

    const { config: { toolbars, actions }, disabled, fields } = this.props
    let { title, header = [] } = this.state

    const tableHeader = header.map((h, i) =>
      <TableCell
        key={i}
        numeric={h.numeric}
        compact={h.compact}
        disablePadding={h.disablePadding}
        style={h.style}
      >
        {h.label}
      </TableCell>
    )

    const tableBody = fields.map((row, i) =>
      <MuiTableRow
        key={i}
        row={row}
        index={i}
        hover={this.state.hover}
        onRowClick={actions ? actions.onRowClick : null}
        {...this.props}
        {...this.state}
      />
    )

    return (
      <Paper>
        <TopToolbar
          title={title}
          config={
            toolbars
              ? {
                  ...toolbars.top,
                  filter: this.state.filter,
                  search: this.state.search,
                  searchChange: (e, v) =>
                    this.setState({ ...this.state, search: v })
                }
              : {
                  filter: this.state.filter,
                  search: this.state.search,
                  searchChange: (e, v) =>
                    this.setState({ ...this.state, search: v })
                }
          }
        />
        <Table>
          <TableHead>
            <TableRow>
              {tableHeader}
              {!disabled ? <TableCell compact disablePadding /> : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableBody}
          </TableBody>
        </Table>
        <BottomToolbar
          config={toolbars ? toolbars.bottom : {}}
          rows={{
            visibleRows: fields.length,
            allRows: fields.length
          }}
          actions={[
            {
              action: !disabled ? () => fields.push({}) : null,
              label: 'Add New Device',
              icon: 'add',
              color: 'primary'
            }
          ]}
        />
      </Paper>
    )
  }
}

export default MuiTable
