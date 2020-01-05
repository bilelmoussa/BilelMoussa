import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const TestStyle = (theme) =>({
    root: {
        width: '45%',
        maxWidth: 1000,
        minWidth: 340, 
        padding: theme.spacing(1, 2),
        margin: '4rem auto',
        display: "flex",
        flexDirection: "column",
      }
})

class TestChart extends Component {
    render() {
        const{classes} = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.root}>
                    <figure>
                        <svg preserveAspectRatio="none" width={"100%"}>

                        </svg>
                    </figure>
                </Paper>
            </React.Fragment>
        )
    }
}

TestChart.protoType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(TestStyle)(TestChart);