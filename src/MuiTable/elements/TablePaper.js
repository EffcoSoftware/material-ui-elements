import React, { Component } from 'react'
import _ from 'lodash'
import Paper from 'material-ui/Paper'
import Table from './Table'
import ToolbarTop from './ToolbarTop'
import ToolbarBottom from './ToolbarBottom'

class TablePaper extends Component {
  state = {
    filterString: '',
    optionsOpen: false,
    optionsAnchorEl: undefined
  }

  filterChange = v => this.setState({ ...this.state, filterString: v })

  filterData = (data, filterBy, filterString) => {
    return filterBy && filterString
      ? data.filter(d =>
          _.get(d, filterBy)
            .toLowerCase()
            .includes(filterString.toLowerCase())
        )
      : data
  }

  handleOptionsClick = event => {
    console.log(event)
    this.setState({
      ...this.state,
      optionsOpen: true,
      optionsAnchorEl: event.currentTarget
    })
  }

  handleOptionsRequestClose = () => {
    this.setState({ ...this.state, optionsOpen: false })
  }

  render = () => {
    const { data, filterBy, toolbarBottom, toolbarTop } = this.props
    return (
      <Paper>
        {toolbarTop !== false ? (
          <ToolbarTop
            {...this.props}
            {...this.state}
            filterChange={this.filterChange.bind(this)}
            handleOptionsClick={this.handleOptionsClick.bind(this)}
            handleOptionsRequestClose={this.handleOptionsRequestClose.bind(
              this
            )}
          />
        ) : null}
        <Table
          {...this.props}
          data={this.filterData(data, filterBy, this.state.filterString)}
        />
        {toolbarBottom !== false ? <ToolbarBottom {...this.props} /> : null}
      </Paper>
    )
  }
}

export default TablePaper
