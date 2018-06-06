import React, { Component } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

class MuiLinearProgress extends Component {
  state = { visible: false }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: true })
    }, 1000)
  }

  render() {
    return this.state.visible && <LinearProgress />
  }
}

export default MuiLinearProgress
