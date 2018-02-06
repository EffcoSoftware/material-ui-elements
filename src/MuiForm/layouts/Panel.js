import React, { Component } from 'react'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from 'material-ui/ExpansionPanel'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import Icon from 'material-ui/Icon'
import FormFields from '../elements/FormFields'
import CrudButtons from '../../CrudButtons'

class MuiExpansionPanel extends Component {
  state = { expanded: false, info: false }
  expand() {
    this.setState({ expanded: !this.state.expanded })
  }
  expandInfo() {
    this.setState({ info: !this.state.info })
  }
  componentWillMount() {
    this.setState({
      expanded: this.props.expanded || false
    })
  }

  render() {
    const {
      title,
      icon,
      info,
      pristine,
      submitting,
      invalid,
      actions,
      styles
    } = this.props

    if (!actions) return null

    const { disabled, ...rest } = this.props

    const { expanded } = this.state

    const topActions = {
      customButtons: disabled &&
        info &&
        !this.state.info && {
          style: { color: '#666' },
          buttons: [{ ...info, action: this.expandInfo.bind(this) }]
        },
      delete: actions.delete,
      edit: actions.edit,
      add: actions.add,
      compact: true,
      style: { color: '#004a6a' }
    }
    const bottomActions = {
      cancel: actions.cancel,
      undo: actions.undo,
      save: actions.save,
      compact: true
    }

    const panelSummary = (
      <ExpansionPanelSummary style={{ color: '#004a6a' }}>
        {icon && (
          <Icon
            onClick={this.expand.bind(this)}
            style={
              expanded
                ? {
                    fontSize: 24,
                    marginRight: 24,
                    marginTop: 9
                  }
                : { fontSize: 18, marginRight: 24 }
            }
          >
            {icon}
          </Icon>
        )}
        <div style={{ flex: 1, textAlign: 'left' }}>
          <Typography
            style={{
              fontSize: expanded
                ? styles &&
                  styles.titleStyles &&
                  styles.titleStyles.fontSize &&
                  styles.titleStyles.fontSize
                  ? styles.titleStyles.fontSize
                  : 18
                : undefined,
              fontWeight: expanded && 500,
              marginTop: expanded && 9,
              marginBottom: expanded && 5,
              color: '#004a6a'
            }}
            onClick={this.expand.bind(this)}
          >
            {title}
          </Typography>
        </div>
        {expanded && (
          <div style={{ padding: 0 }}>
            <CrudButtons
              {...this.props}
              submittable={!(pristine || submitting || invalid)}
              disabled={disabled}
              // color="primary"
              compact
              actions={topActions}
            />
          </div>
        )}
        {!expanded && info && info.component ? (
          <info.component compact {...rest} />
        ) : null}
      </ExpansionPanelSummary>
    )

    const panelDetails = (
      <div>
        {this.state.info && info && info.component ? (
          <info.component {...rest} expandInfo={this.expandInfo.bind(this)} />
        ) : (
          <Divider />
        )}
        <ExpansionPanelDetails>
          <FormFields margin={0} {...this.props} />
        </ExpansionPanelDetails>
      </div>
    )

    const panelActions = (
      <div>
        <Divider />
        {!disabled && (
          <ExpansionPanelActions>
            <CrudButtons
              {...this.props}
              submittable={!(pristine || submitting || invalid)}
              disabled={disabled}
              actions={bottomActions}
            />
          </ExpansionPanelActions>
        )}
      </div>
    )

    return (
      <ExpansionPanel expanded={this.state.expanded}>
        {panelSummary}
        {panelDetails}
        {panelActions}
      </ExpansionPanel>
    )
  }
}

export default MuiExpansionPanel
