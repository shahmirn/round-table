import * as React from 'react';
import { Link } from 'react-router-dom';
import {
    // FormGroup,
    // FormControlLabel,
    // Switch,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    withStyles,
    WithStyles,
    Button
} from 'material-ui';
import { StyleRules } from 'material-ui/styles';
import { Menu as MenuIcon, AccountCircle } from 'material-ui-icons';

const styles: StyleRules = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    plainLink: {
      color: 'inherit',
      textDecoration: 'none'
    }
};

class MenuAppBar extends React.Component<WithStyles<keyof typeof styles>> {
    state = {
      auth: false,
      anchorEl: undefined,
    };
  
    handleChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      this.setState({ auth: checked });
    }
  
    handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      this.setState({ anchorEl: event.currentTarget });
    }
  
    handleClose = () => {
      this.setState({ anchorEl: undefined });
    }
  
    render() {
      const { classes } = this.props;
      const { auth, anchorEl } = this.state;
      const open = Boolean(anchorEl);
  
      return (
        <div className={classes.root}>
          {/* <FormGroup>
            <FormControlLabel
              control={
                <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />}
              label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup> */}
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                <Link to="/" className={classes.plainLink}>Round Table</Link>
              </Typography>
              {auth && (
                <div>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              )}
              {!auth && (
                <Link to="/login" className={classes.plainLink}>
                  <Button color="inherit">
                    Login
                  </Button>
                </Link>
              )}
            </Toolbar>
          </AppBar>
        </div>
      );
    }
}

export default withStyles(styles)<{}>(MenuAppBar);