import React from 'react';
import PropTypes from 'prop-types';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class LoginButton extends React.Component {

  state = {
    loginDialogOpen: false,
    username: null,
    password: null,
  }

  handleLoginDialogOpen = () =>{
    this.setState({ loginDialogOpen: true })
  }

  handleLoginDialogClose = () => {
    this.setState({ loginDialogOpen: false })
  }

  editUsernameField = (ev) => {
    this.setState({ username: ev.target.value })
  }

  editPasswordField = (ev) => {
    this.setState({ password: ev.target.value })
  }

  handleLogin = () => {
    if(this.props.handleLogin(this.state.username, this.state.password)){
      this.setState({username: null, password: null});
      this.handleLoginDialogClose();
    }
  }

  render(){
    return this.props.display &&(<div>
      <Dialog
        open={this.state.loginDialogOpen}
        onClose={this.handleLoginDialogClose}
        aria-labelledby="form-dialog-title"
      >
          <DialogTitle id="form-dialog-title">Zaloguj</DialogTitle>
          <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Login"
            fullWidth
            onChange={this.editUsernameField}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Hasło"
            type="password"
            fullWidth
            onChange={this.editPasswordField}
          />
          </DialogContent>
          <DialogActions>
          <Button onClick={this.handleLogin} color="accent">
            Zaloguj
          </Button>
          <Button onClick={this.handleLoginDialogClose} color="accent">
            Anuluj
          </Button>
        </DialogActions>
      </Dialog>
      <Button color="inherit" onClick={this.handleLoginDialogOpen}>Zaloguj</Button>
    </div>)
  }
}

export default LoginButton;