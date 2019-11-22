import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';

export class NavMobileMenu extends Component {
    render() {
        const{mobileMoreAnchorEl, handleMenuClose, handleMobileMenuClose, handleProfileMenuOpen, user} = this.props;
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
        
        return (
            <div>
                <Menu
                    anchorEl={mobileMoreAnchorEl}
                    getContentAnchorEl={null}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    open={isMobileMenuOpen}
                    onClose={handleMenuClose}
                    keepMounted
                    PaperProps={{
                        style: {
                            minWidth: 200,
                        },
                    }}
                >
                    <MenuItem onClick={handleMobileMenuClose}>
                        <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                        </IconButton>
                        <p>Messages</p>
                    </MenuItem>
                    <MenuItem onClick={handleMobileMenuClose}>
                        <IconButton color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                        </IconButton>
                        <p>Notifications</p>
                    </MenuItem>
                    <MenuItem onClick={handleProfileMenuOpen}>
                        <IconButton color="inherit">
                        <AccountCircle />
                        </IconButton>
                        <p>{user.user.name || 'user name'}</p>
                    </MenuItem>
                </Menu>                
            </div>
        )
    }
}

NavMobileMenu.protoType = {
    mobileMoreAnchorEl: PropTypes.object.isRequired,
    handleMenuClose: PropTypes.func.isRequired,
    handleMobileMenuClose: PropTypes.func.isRequired,
    handleProfileMenuOpen: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    LogoutUser: PropTypes.func.isRequired
}

export default NavMobileMenu
