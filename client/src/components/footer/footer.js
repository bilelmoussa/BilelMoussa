import React, { Component } from 'react';
import FooterSvg from '../svg_img/footer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = theme => ({ 
    footer:{
        marginTop: 60,
        marginBottom: 40,
        position: "relative",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: 15,
        justifyContent: "flex-start",
        [theme.breakpoints.down('xs')]: {
          flexDirection: "column"
        },
      },
    
      Footer_List_Text:{
        letterSpacing: 2,
        fontFamily: "'Orbitron', sans-serif;",
        color: '#f1f1f1',
        textTransform: "capitalize",
      },
      
      List_Item:{
        textAlign: "center",
      },
    
      ListMenu:{
        overflow: 'hidden',
        marginLeft: "2rem",
        [theme.breakpoints.down('xs')]: {
          width: '200px',
          margin: '0 auto'
        },
      },

      rootListText:{
        padding: "8px 15px"
      },
    
      List_Name:{
        textAlign: "center",
        color: "#ffffff",
        letterSpacing: 3,
        textTransform: "capitalize",
        margin: '20px 0',
        fontFamily: "'Orbitron', sans-serif",
        padding: 8,
        borderRadius: 5,
      }
})

class Footer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className="Footer">
                <FooterSvg />
                <div className={classes.footer}>
                    <List className={classes.ListMenu}>
                        <h3 className={classes.List_Name}>useful links</h3>          
                        <ListItem button  classes={{root:classes.List_Item, button: classes.rootListText}} component={Link} to={'/contact'} >
                            <ListItemText classes={{primary: classes.Footer_List_Text}} primary="Contact me" />
                        </ListItem>
                        <ListItem  button classes={{root:classes.List_Item, button: classes.rootListText}} component={Link} to={'/projects'}>
                            <ListItemText classes={{primary: classes.Footer_List_Text}} primary="My Projects" />
                        </ListItem>
                    </List>

                    <List className={classes.ListMenu}>
                        <h3 className={classes.List_Name}>Social media</h3>          
                        <ListItem button  classes={{root:classes.List_Item, button: classes.rootListText}} component="a" href="https://www.facebook.com/Bilel.BM01" target="_blank">
                            <ListItemText classes={{primary: classes.Footer_List_Text}} primary="facebook"  />
                        </ListItem>
                        <ListItem  button classes={{root:classes.List_Item, button: classes.rootListText}} component="a" href="https://www.instagram.com/moussabilel/" target="_blank">
                            <ListItemText classes={{primary: classes.Footer_List_Text}} primary="instagram" />
                        </ListItem>
                    </List>
                </div>
                <div id="copyright">
                  Bilel Moussa, Copyright &copy; 	{new Date().getFullYear()}
                </div>
            </div>
        )
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer);
