import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


export class NavMenu extends Component {
    render() {
        const{anchorEl, isMenuOpen, handleMenuClose, LogoutUser} = this.props;

        return (
            <div>
                <Menu
                    getContentAnchorEl={null}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                    PaperProps={{
                        style: {
                          minWidth: 200,
                        },
                    }}
                >
                    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                    <MenuItem onClick={LogoutUser}>Logout</MenuItem>
                </Menu>
            </div>
        )
    }
}

NavMenu.protoType = {
    anchorEl: PropTypes.object.isRequired,
    isMenuOpen: PropTypes.object.isRequired,
    handleMenuClose: PropTypes.func.isRequired,
}

export default NavMenu


