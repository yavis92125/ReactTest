import React, { Fragment } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {Button} from "reactstrap";
import logo from '../../assets/images/12.jpg'
import * as global from '../../consts/global'


export default class AppHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  render() {
    return (
      <Fragment>
        {/*web menu bar*/}
        <AppBar position="static" className="app-bar">
          <Toolbar className={'app-header-right mr-300'} >
            {/*logo*/}
            <img className={'rounded-circle mr-500'} width={'42'} src={logo} alt={''}/>
            {/*menu buttons*/}
            {global.gMenuText.map(menu =>
              <IconButton edge="start" color="inherit" className={'menu-font mr-2'} aria-label="menu">
                { menu }
              </IconButton>
            )}
            {/*account button*/}
            <Button color={'warning'} size={'lg'} className={'pillow-lg-btn'}>Account</Button>
          </Toolbar>
        </AppBar>
      </Fragment>

    )
  }
}