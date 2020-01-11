import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const UsersSvg = props => (
    <svg viewBox="0 0 80.13 80.13" {...props}>
      <path d="M48.355 17.922c3.705 2.323 6.303 6.254 6.776 10.817a11.69 11.69 0 004.966 1.112c6.491 0 11.752-5.261 11.752-11.751 0-6.491-5.261-11.752-11.752-11.752-6.429.002-11.644 5.169-11.742 11.574zm-7.699 24.062c6.491 0 11.752-5.262 11.752-11.752s-5.262-11.751-11.752-11.751c-6.49 0-11.754 5.262-11.754 11.752s5.264 11.751 11.754 11.751zm4.985.801h-9.972c-8.297 0-15.047 6.751-15.047 15.048v12.195l.031.191.84.263c7.918 2.474 14.797 3.299 20.459 3.299 11.059 0 17.469-3.153 17.864-3.354l.785-.397h.084V57.833c.003-8.297-6.747-15.048-15.044-15.048zm19.443-12.132h-9.895a14.483 14.483 0 01-4.47 10.088c7.375 2.193 12.771 9.032 12.771 17.11v3.758c9.77-.358 15.4-3.127 15.771-3.313l.785-.398h.084V45.699c0-8.296-6.75-15.046-15.046-15.046zm-45.049-.8c2.299 0 4.438-.671 6.25-1.814a14.544 14.544 0 015.467-9.276c.012-.22.033-.438.033-.66 0-6.491-5.262-11.752-11.75-11.752-6.492 0-11.752 5.261-11.752 11.752 0 6.488 5.26 11.75 11.752 11.75zm10.554 10.888a14.492 14.492 0 01-4.467-10.032c-.367-.027-.73-.056-1.104-.056h-9.971C6.75 30.653 0 37.403 0 45.699v12.197l.031.188.84.265c6.352 1.983 12.021 2.897 16.945 3.185v-3.683c.002-8.078 5.396-14.915 12.773-17.11z" />
    </svg>
)

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 200,
        height: 240,   
        padding: theme.spacing(2, 2),
        margin: '1rem auto 1rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderRadius: 10,
        [theme.breakpoints.down('md')]: {
            margin: '1rem auto',
        },
        [theme.breakpoints.down('xs')]: {
            minWidth: 140,
            height: 160,
            padding: theme.spacing(1, 1),
            margin: '0.5rem auto',
        }, 
    },
    cardInner:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& p":{
            marginTop: "1rem",
            fontSize: 18,
            letterSpacing: 1,
            [theme.breakpoints.down('xs')]: {
                fontSize: 14,
            },
        }
    },
    usersSvg:{
        width: 80,
        margin: "0 auto",
        [theme.breakpoints.down('xs')]: {
            width: 40,
        }, 
    }
}));


export default function UsersCount(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Paper className={classes.root}>
                    <div className={classes.cardInner}>
                        <UsersSvg className={classes.usersSvg}/>
                        <p>Users</p>
                        <p>{props.users}</p> 
                    </div>
            </Paper>
        </React.Fragment>
    )
}

