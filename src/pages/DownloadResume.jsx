import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme({
    typography: {
        h3: {
            fontSize: 20,
            textAlign: 'center',
            backgroundColor: 'default',
            padding: '30px',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    DownloadResume: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #000',
        borderRadius: '5px',
    },
    button: {
        display: 'flex',
        padding: theme.spacing(1),
        margin: '10px',
        justifyContent: 'center',
        textAlign: 'center',
        width: '90%',
    },
}));

function DownloadResume() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.DownloadResume}>
                <Grid container margin={4} justify='space-between' alignItems='center'>
                    <Grid item xs={12}>
                        <ThemeProvider theme={theme}>
                            <Typography variant='h3'>Конвертация прошла успешно </Typography>
                        </ThemeProvider>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant='contained' color='primary' className={classes.button}>
                            Скачать в JSON
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant='contained' color='primary' className={classes.button}>
                            Скачать в DOCX
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default DownloadResume;
