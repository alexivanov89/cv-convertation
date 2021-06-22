import React from 'react';

import { Grid, Paper } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';

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
    radio: {},
}));

function ConvertationResume() {
    const classes = useStyles();
    const [value, setValue] = React.useState('безФИО');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <FormControl component='fieldset'>
                                <FormLabel component='legend'>Выберите форму загрузки резюме</FormLabel>
                                <RadioGroup
                                    aria-label='cv'
                                    name='cv'
                                    value={value}
                                    onChange={handleChange}
                                    className={classes.radio}
                                >
                                    <FormControlLabel value='cvName' control={<Radio />} label='CV IBS с Фио ' />
                                    <FormControlLabel value='cvNotName' control={<Radio />} label='CV IBS без Фио' />
                                </RadioGroup>
                            </FormControl>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Поле отзыва рекрутера</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Конвертировать резюме</Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default ConvertationResume;
