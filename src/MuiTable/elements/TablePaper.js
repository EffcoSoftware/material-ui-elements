import React, { Component } from 'react'
import _ from 'lodash'
import Paper from 'material-ui/Paper'
import Table from './Table'
import ToolbarTop from './ToolbarTop'
import ToolbarBottom from './ToolbarBottom'

class TablePaper extends Component {
  state = {
    filterString: '',
    filters: [],
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

  handleOptionsOpen = event => {
    console.log(event)
    this.setState({
      ...this.state,
      optionsOpen: true,
      optionsAnchorEl: event.currentTarget
    })
  }

  handleOptionsClick = (value, event) => {
    if (event === 'filter') {
      var filtersAdjusted = this.state.filters
      const filterIndex = _.findIndex(filtersAdjusted, value)

      if (filterIndex >= 0) {
        filtersAdjusted = filtersAdjusted.filter(
          f => !(f.name === value.name && f.id === value.id)
        )
      } else {
        filtersAdjusted.push(value)
      }

      this.setState({
        ...this.state,
        filters: filtersAdjusted
      })
    } else {
      this.setState({ ...this.state })
    }
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
            filters={this.state.filters}
            filterChange={this.filterChange.bind(this)}
            handleOptionsOpen={this.handleOptionsOpen.bind(this)}
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
