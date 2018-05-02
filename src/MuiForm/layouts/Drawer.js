import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import _ from 'lodash'
import Drawer from 'material-ui/Drawer'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Toolbar from 'material-ui/Toolbar' //'material-ui/Toolbar'
import ToolbarTop from '../../MuiTable/elements/ToolbarTop' //'material-ui/Toolbar'
// import Divider from 'material-ui/Divider'
// import Icon from 'material-ui/Icon'
import FormFields from '../elements/FormFields'
import CrudButtons from '../../CrudButtons'

const styles = theme => ({
  drawerPaper: {
    marginTop: 145,
    marginLeft: 8,
    width: 302,
    height: 'calc(100% - 156px)', //-145px
    boxShadow:
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
  },
  typographyRoot: {
    fontSize: '0.85rem',
    color: theme.palette.primary.main,
    paddingBottom: '11px'
  },
  listItemTextRoot: {
    fontSize: '0.8rem',
    padding: '3px 16px' //when Link is applied
  },
  listItemIconRoot: {
    fontSize: '18px',
    width: '18px',
    height: '18px'
  }
})

class MuiFormDrawer extends Component {
  state = { info: [] }
  // state = { expanded: false, info: [] }
  // expand() {
  //   this.setState({ expanded: !this.state.expanded })
  // }
  expandInfo(index) {
    const { info } = this.state
    const {
      drawer: { drawerProps }
    } = this.props

    const {
      history: { push },
      match: {
        params: { id }
      },
      path,
      forms
    } = drawerProps

    const formName = _.get(forms, `[${index}].name`)
    push(`${path}${id}/${formName}?viewHistory=history`)

    this.setState({
      info: _.set(info, `[${index}]`, !_.get(info, `[${index}]`))
    })
  }
  componentWillMount() {
    this.setState({
      // expanded: this.props.expanded || false,
      info: Array(this.props.info.length).fill(false) || []
    })
  }

  render() {
    const {
      title,
      // icon,
      info,
      drawer,
      pristine,
      submitting,
      invalid,
      actions,
      // styles,
      // active,
      add,
      groups,
      classes,
      toolbarTopStyles
    } = this.props

    if (!actions) return null
    const { disabled, ...rest } = this.props

    const topActions = index => {
      return {
        customButtons:
          // disabled &&
          info[index] && {
            // !this.state.info &&
            style: { color: '#666' },
            buttons: [
              { ...info[index], action: this.expandInfo.bind(this, index) }
            ]
          },
        // delete:
        //   info && info.historyActions
        //     ? info.historyActions.delete
        //     : actions.delete,
        // edit:
        //   active || active >= 0
        //     ? info && info.historyActions
        //       ? info.historyActions.edit
        //       : actions.edit
        //     : null,
        // add: info && info.historyActions ? info.historyActions.add : null, //actions.add,
        compact: true,
        style: { color: '#004a6a' }
      }
    }

    const bottomActions = {
      customButtons: add ? actions.customButtons : null,
      add: add ? actions.add : null,
      cancel: actions.cancel,
      undo: !add ? actions.undo : null,
      save: !add ? actions.save : null,
      compact: true
    }

    const drawerSummary =
      drawer && drawer.drawerToolbarComponent ? (
        <drawer.drawerToolbarComponent {...drawer.drawerProps} />
      ) : (
        <div style={{ width: 300, marginTop: 'calc(162px - 147px)' }}>
          <Toolbar>
            <Typography classes={{ root: classes.typographyRoot }} type="title">
              {title.toUpperCase()}
            </Typography>
          </Toolbar>
          {/* <Divider /> */}
        </div>
      )

    const drawerDetails = <drawer.component {...drawer.drawerProps} />

    const drawerActions = (
      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 10
        }}
      >
        {/* <Divider /> */}
        <div
          style={{
            marginTop: 20,
            paddingLeft: 10,
            paddingRight: 10
          }}
        >
          <CrudButtons
            {...this.props}
            submittable={!(pristine || submitting || invalid)}
            disabled={disabled}
            actions={bottomActions}
            reset={false}
            raised={true}
            stacked
          />
        </div>
      </div>
    )

    const contentDetails = (
      <div>
        <Paper
          style={{
            paddingBottom: 10, //143,
            // width: 'calc(100% - 310px)',
            height: 855, //'calc(100% - 156px)', //-145px
            overflowY: 'auto',
            overflowX: 'hidden'
          }}
        >
          {groups.map((g, i) => {
            const currInfo = info && info[i]
            return (
              <div key={g.name} id={g.name}>
                <ToolbarTop
                  style={toolbarTopStyles && { ...toolbarTopStyles }}
                  title={(g.label && g.label.toUpperCase()) || 'Details'}
                  topComponent={
                    _.isEmpty(_.compact(this.state.info)) &&
                    g.name !== 'reg' && (
                      <CrudButtons
                        {...this.props}
                        submittable={!(pristine || submitting || invalid)}
                        disabled={disabled}
                        compact
                        actions={topActions(i)}
                      />
                    )
                  }
                />
                {currInfo &&
                currInfo.component &&
                g.name === currInfo.activeForm.name &&
                this.state.info[i] ? (
                  <currInfo.component
                    {...rest}
                    expandInfo={this.expandInfo.bind(this, i)}
                    index={i}
                  />
                ) : null}
                <div
                  style={{
                    padding: 25
                  }}
                >
                  <FormFields fields={g.fields} {...this.props} />
                </div>
              </div>
            )
          })}
        </Paper>
      </div>
    )

    return (
      <div>
        <Drawer
          type="permanent"
          open
          style={{ width: 300 }}
          classes={{ paper: classes.drawerPaper }}
          elevation={50}
          ModalProps={{
            hideBackdrop: false,
            disableBackdropClick: false
            // disableEnforceFocus: true
          }}
          // BackdropProps={{
          //   style: { backgroundColor: 'rgba(0,0,0,0)' }
          // }}
        >
          {drawerSummary}
          {drawerDetails}
          {drawerActions}
        </Drawer>
        <Grid
          container
          style={{
            // marginLeft: 302,
            // marginTop: 52, //143,
            width: 'calc(100% + 17px)'
            // height: 'calc(100% - 156px)',
          }}
        >
          <Grid item xs={12}>
            {contentDetails}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(MuiFormDrawer)
