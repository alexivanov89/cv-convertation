import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

let theme = createMuiTheme({
    typography: {
        h3: {
            fontSize: 20,
            textAlign: 'center',
        },
    },
});

const useStyles = makeStyles((theme) => ({
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
    navigation: {},
}));

function DownloadResume() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <ThemeProvider theme={theme}>
                            <Typography variant='h3'>Конвертация прошла успешно </Typography>
                        </ThemeProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>Скачать json</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>Скачать docx</Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default DownloadResume;
