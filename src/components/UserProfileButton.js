import React from 'react'
import IconButton from 'material-ui/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';

class UserProfileButton extends React.Component {
  
  state = {
    anchorEl: null,
  }
  
  showUserMenu = (ev) =>{
    this.setState({anchorEl: ev.currentTarget})
  }

  hideUserMenu = (ev) =>{
    this.setState({anchorEl: null})
  }

  handleLogout = () => {
    this.props.handleLogout()
    this.hideUserMenu()
  }
  
  render(){
    const {anchorEl} = this.state;

    return this.props.display && (
      <div>
        <IconButton color="inherit" onClick={this.showUserMenu.bind(this)}><AccountCircle/></IconButton>
        <Menu
          id="account-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem disabled onClick={this.handleClose}>Profil</MenuItem>
          <MenuItem disabled onClick={this.handleClose}>Moje konto</MenuItem>
          <MenuItem onClick={this.handleLogout}>Wyloguj</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default UserProfileButton