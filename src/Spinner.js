import React, { Component } from 'react'
import { RefreshIndicator } from 'material-ui-effco'

const styles = {
  container: {
    height: 100,
    textAlign: 'center',
    lineHeight: 40
  }
}

class Spinner extends Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  componentWillMount() {
    setTimeout(() => {
      if (this.refs.spinner) this.setState({ visible: true })
    }, 500)
  }

  render() {
    const { visible } = this.state
    return (
      <div ref="spinner" style={styles.container}>
        <RefreshIndicator
          size={40}
          left={50}
          top={50}
          status="loading"
          style={{
            display: visible ? 'inline-block' : 'none',
            position: 'relative',
            lineHeight: 1
          }}
        />
      </div>
    )
  }
}

export default Spinner
