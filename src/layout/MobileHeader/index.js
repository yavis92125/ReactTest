import React, { Fragment } from 'react'

import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import * as global from '../../consts/global'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default class MobileHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  handleClickOpen = () => {
    this.setState({
      isOpen: true
    })
  };

  handleClose = () => {
    this.setState({
      isOpen: false
    })
  };

  render() {
    return (
        <Fragment>
          {/* app menubar*/}
          <AppBar position="static" className={'app-bar'}>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.handleClickOpen}>
                ☰
              </IconButton>
              <Typography variant="h6">Croptomize</Typography>
            </Toolbar>
          </AppBar>
          {/*side nav-menubar*/}
          <Dialog
              fullScreen open={this.state.isOpen}
              onClose={this.handleClose}
              style={{width: 220}}
              TransitionComponent={Transition}
          >
            <List className={'mt-30'}>
              {global.gMenuText.map(menu =>
                <ListItem button>
                  <ListItemText primary={ menu } />
                </ListItem>
              )}
            </List>
          </Dialog>
        </Fragment>

    )
  }
}