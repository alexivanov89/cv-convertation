import React from 'react';
import { makeStyles, Grid, Paper } from '@material-ui/core';
import MyTabs from './MyTabs';

/* const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        direction: 'column',
        justify: 'space-between',
        alignItems: 'stretch',
    },
    paper: {
        padding: theme.spacing(6),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
})); */

function LoadingResume() {
    // const classes = useStyles();

    return (
        <>
            <MyTabs />
            {/* <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}> Блок Кнопок1</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Поле ввода</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Блок Кнопок2</Paper>
                    </Grid>
                </Grid>
            </div> */}
        </>
    );
}

export default LoadingResume;
