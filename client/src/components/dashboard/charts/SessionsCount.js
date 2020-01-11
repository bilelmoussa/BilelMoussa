import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const SessionsSvg = props => (
    <svg viewBox="0 0 27.271 27.271" {...props}>
        <path d="M25.324 1.948H1.953A1.948 1.948 0 000 3.899v19.477c0 1.074.871 1.947 1.953 1.947h23.371a1.95 1.95 0 001.947-1.947V3.899a1.95 1.95 0 00-1.947-1.951zM9.314 3.411a.975.975 0 010 1.948.973.973 0 010-1.948zm-2.98 0a.975.975 0 11-.004 1.95.975.975 0 01.004-1.95zm-2.924 0c.539 0 .973.436.973.975a.972.972 0 11-1.946 0 .974.974 0 01.973-.975zm21.914 19.965H1.953V6.839h23.371v16.537z" />
        <path d="M4.955 11.149h3.701v1.252H4.955zm5.551 0h11.812v1.252H10.506zm-5.551 3.115h3.701v1.254H4.955zm0 2.946h3.701v1.254H4.955zm5.551-2.946h11.812v1.254H10.506zm0 2.946h11.812v1.254H10.506z" />
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
            textAlign: "center",
            [theme.breakpoints.down('xs')]: {
                fontSize: 14,
            },
        }
    },
    sessionsSvg:{
        width: 80,
        margin: "0 auto",
        [theme.breakpoints.down('xs')]: {
            width: 40,
        }, 
    }
}));


export default function SessionsCount(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Paper className={classes.root}>
                    <div className={classes.cardInner}>
                        <SessionsSvg className={classes.sessionsSvg}/>
                        <p>Sessions</p>
                        <p>{props.Sessions}</p> 
                    </div>
            </Paper>
        </React.Fragment>
    )
}

