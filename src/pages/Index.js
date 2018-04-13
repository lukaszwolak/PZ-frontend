import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';
import LoginButton from '../components/LoginButton';
import MiniDrawer from '../components/MiniDrawer'
import UserProfileButton from '../components/UserProfileButton'
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
  },
  flex: {
    flex: 0.9,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
});

class Index extends React.Component {
  state = {
    loggedIn: false,
    username: null,
    drawerOpen: false,
  };

  handleLogin = (username, password) => {
    const USERNAME = "user";
    const PASSWORD = "password";
    const USER = 'użytkownik'
    if(username == USERNAME && password == PASSWORD){
      this.setState({loggedIn: true, username, role: USER});
      return true;
    }
    return false;
  }
  
  handleLogout = () => {
    this.setState({loggedIn: false, username: null});
  }
  
  toggleDrawerOpen = () => {
    this.setState(prevState => {
      return {drawerOpen : !prevState.drawerOpen}});
  }
  render() {
    const { classes } = this.props;
    const { loggedIn, drawerOpen } = this.state;

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.toggleDrawerOpen}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              PetAlert
            </Typography>
            <LoginButton handleLogin={this.handleLogin} display={!loggedIn} className={classes.flex}/>
            <UserProfileButton display={loggedIn} handleLogout={this.handleLogout} className={classes.flex} />
          </Toolbar>
        </AppBar>
        <MiniDrawer open={drawerOpen}/>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));