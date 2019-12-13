import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles, createMuiTheme  } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import NavMenu from './NavMenu'
import NavMobileMenu from './NavMobileMenu'
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const drawerWidth = 240;
const closedDrawerWidth = 53;
const closedDrawerWidthSm = 73

const theme = createMuiTheme({
});

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        backgroundColor: '#2196f3',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: closedDrawerWidth,
        [theme.breakpoints.up('sm')]: {
          width: closedDrawerWidthSm,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    grow: {
        flexGrow: 1,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
    },
    profileBtn:{
        padding: theme.spacing(0, 1), 
    },
    dividerVer:{
        height: 50,
        margin: '0 0.5rem'
    }
})


class NavigatonBar extends Component {
    constructor(){
        super();
        this.state = {
            open: false,
            mobileOpen: false,
            mobileMoreAnchorEl: null,
            anchorEl: null,
        }
    }

    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };
    
    handleDrawerOpen = () =>{
        this.props.handleDrawertoggle(true);
        this.setState({open: true});
    }

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    handleDrawerClose = () =>{
        this.props.handleDrawertoggle(false);
        this.setState({open: false})
    }


    render() {
        const {classes, user, LogoutUser} = this.props;
        const{open, anchorEl, mobileMoreAnchorEl} = this.state;
        const isMenuOpen = Boolean(anchorEl);

        return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            })}
        >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.grow} />

                <div className={classes.sectionDesktop}>

                   

                    <IconButton color="inherit">
                        <Badge badgeContent={1} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>

                    <IconButton color="inherit">
                        <Badge badgeContent={1} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    <Divider orientation="vertical" className={classes.dividerVer} />

                    <Button
                        aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                            <p className={classes.profileBtn}>{user.user.name || 'user name'}</p>
                       <ArrowDropDownIcon />
                    </Button>

                </div>
                <div className={classes.sectionMobile}>
                    <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                        <MoreIcon />
                    </IconButton>
                </div>            
        </Toolbar>
        </AppBar>

        <NavMenu anchorEl={anchorEl} isMenuOpen={isMenuOpen} handleMenuClose={this.handleMenuClose} LogoutUser={LogoutUser} /> 

        <NavMobileMenu mobileMoreAnchorEl={mobileMoreAnchorEl} handleMenuClose={this.handleMenuClose} handleMobileMenuClose={this.handleMobileMenuClose} handleProfileMenuOpen={this.handleProfileMenuOpen} LogoutUser={LogoutUser} user={user} />  

        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            })}
            classes={{
            paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            }),
            }}
            open={open}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                    <ListItem button key={'Inbox'}>
                        <ListItemIcon>
                            <InboxIcon /> 
                        </ListItemIcon>
                        <ListItemText primary={'Inbox'} />
                    </ListItem>
            </List>
            <Divider />
        </Drawer>
    </div>
        )
    }
}

NavigatonBar.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    LogoutUser: PropTypes.func.isRequired,
    handleDrawertoggle: PropTypes.func.isRequired
}

export default withStyles(styles)(NavigatonBar);
