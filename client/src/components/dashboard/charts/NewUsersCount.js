import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const NewUsersSvg = props => (
    <svg viewBox="0 0 45.902 45.902" {...props}>
        <path d="M43.162 26.681a9.42 9.42 0 00-5.825-2.742 9.267 9.267 0 003.089-6.912 9.306 9.306 0 00-9.308-9.307c-4.911 0-8.932 3.804-9.281 8.625 4.369 1.89 7.435 6.244 7.435 11.299 0 1.846-.42 3.65-1.201 5.287a12.412 12.412 0 013.066 2.26 12.51 12.51 0 013.61 8.851l-.002.067-.002.057-.082 1.557H45.81l.092-12.33a9.413 9.413 0 00-2.74-6.712z" />
        <path d="M23.184 34.558a9.271 9.271 0 003.092-6.912 9.309 9.309 0 00-9.309-9.309 9.308 9.308 0 00-9.309 9.309 9.272 9.272 0 003.084 6.906c-4.84.375-8.663 4.383-8.698 9.318l-.092 1.853h29.706l.092-1.714a9.421 9.421 0 00-8.566-9.451zM6.004 11.374v3.458a2.598 2.598 0 005.194 0v-3.458h3.454a2.598 2.598 0 000-5.193h-3.454V2.774a2.597 2.597 0 00-5.194 0V6.18H2.596a2.596 2.596 0 000 5.193h3.408z" />
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
    newUsersSvg:{
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
                        <NewUsersSvg className={classes.newUsersSvg}/>
                        <p>New Users <br/></p>
                        <p>{props.NewUsers}</p> 
                    </div>
            </Paper>
        </React.Fragment>
    )
}

