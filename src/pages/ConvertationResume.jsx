import React from 'react';

import {
    Button,
    Grid,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    ConvertationForm: {
        display: 'flex',
        flexWrap: 'wrap',
        border: '1px solid #000',
        borderRadius: '5px',
    },
    FormControl: {
        margin: theme.spacing(1),
    },
    button: {
        padding: theme.spacing(1),
    },
    textfield: {
        width: '100%',
    },
}));

function ConvertationResume() {
    const classes = useStyles();
    const [fio, setFio] = React.useState('безФИО');

    const handleChange = (event) => {
        setFio(event.target.value);
    };

    /* const classes = useStyles();
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }; */

    return (
        <>
            <div className={classes.ConvertationForm}>
                <FormControl fullWidth className={classes.FormControl}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <FormLabel component='legend'>Выберите форму загрузки резюме</FormLabel>
                            <RadioGroup
                                aria-label='cv'
                                name='cv'
                                value={fio}
                                onChange={handleChange}
                                className={classes.radio}
                            >
                                <FormControlLabel value='cvName' control={<Radio />} label='CV IBS с Фио ' />
                                <FormControlLabel value='cvNotName' control={<Radio />} label='CV IBS без Фио' />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id='standard-basic'
                                label='Отзыв рекрутера'
                                multiline
                                rows={5}
                                className={classes.textfield}
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item xs={9}></Grid>
                        <Grid item xs={3}>
                            <Button variant='contained' color='primary' className={classes.button}>
                                Сконвертировать резюме
                            </Button>
                        </Grid>
                    </Grid>
                </FormControl>
            </div>
        </>
    );
}

export default ConvertationResume;
