import React, { useState } from 'react';
import { Input, InputLabel, InputAdornment, FormControl, Button, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    myForm: {
        display: 'flex',
        flexWrap: 'wrap',
        border: '1px solid #000',
        borderRadius: '5px',
    },
    FormControl: {
        margin: theme.spacing(1),
    },
    button: {
        padding: '2px',
    },
    input: {
        width: '100%',
    },
}));

export default function SearchForm({ props, message, title, addResumeHandler }) {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addResumeHandler(value);
            setValue('');
            console.log(value);
            // props.history.push('/convertation');
        } else {
            alert(`Поле ввода не заполнено. Введите ${title}.`);
        }
    };

    return (
        <div className={classes.myForm}>
            <FormControl fullWidth className={classes.FormControl} required>
                <Grid container spacing={1}>
                    <Grid item xs={10}>
                        <InputLabel htmlFor='standard-adornment-amount'>{message}</InputLabel>
                        <Input
                            id='standard-adornment-amount'
                            value={value}
                            onChange={handleChange}
                            startAdornment={<InputAdornment position='start'>{title}</InputAdornment>}
                            className={classes.input}
                        />
                    </Grid>

                    <Grid item xs={2}>
                        <Button
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            onClick={(e) => handleSubmit(e)}
                        >
                            Загрузить резюме
                        </Button>
                    </Grid>
                </Grid>
            </FormControl>
        </div>
    );
}
