import React, { useState } from 'react';

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

import { useDispatch, useSelector } from 'react-redux';
import Resume from '../components/Resume';
import api from '../utils/api';
import { setdisableDownload, setValueTab } from '../store/actions';

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

function ConvertationResume(props) {
    const classes = useStyles();

    const resume = useSelector((state) => state.initialresume);

    const [fio, setFio] = useState(null);

    const handleChange = (event) => {
        setFio(event.target.value);
    };

    const [review, setReview] = useState('');

    const reviewHandleChange = (event) => {
        setReview(event.target.value);
    };

    const dataEditResume = {
        fio,
        review,
    };

    const dispatch = useDispatch();

    const editResumeHandler = async (data) => {
        try {
            const response = await api.patch(`/resumes/${resume.id}`, data);
            if (response.statusText === 'OK') {
                props.history.push('/download');
            } else {
                alert(`Что-то пошло не так...`);
            }
        } catch (error) {
            alert(`Произошла ошибка.`);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dataEditResume.fio && dataEditResume.review) {
            editResumeHandler(dataEditResume);
            dispatch(setValueTab(3));
            dispatch(setdisableDownload(false));
        } else if (!!dataEditResume.review === false && dataEditResume.fio) {
            alert(`Нет отзыва рекрутера. Оставьте отзыв.`);
        } else if (!!dataEditResume.fio === false && dataEditResume.review) {
            alert(`Не выбран формат резюме. Выберите формат.`);
        } else {
            alert(`Не выбран формат резюме и нет отзыва рекрутера. Заполните данные.`);
        }
    };

    return (
        <>
            <div className={classes.ConvertationForm}>
                <FormControl fullWidth className={classes.FormControl} required>
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
                                onChange={reviewHandleChange}
                                value={review}
                                required
                            />
                        </Grid>
                        <Grid item xs={9}></Grid>
                        <Grid item xs={3}>
                            <Button
                                variant='contained'
                                color='primary'
                                className={classes.button}
                                onClick={(e) => handleSubmit(e)}
                            >
                                Сконвертировать резюме
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            {resume ? <Resume resume={resume} /> : null}
                        </Grid>
                    </Grid>
                </FormControl>
            </div>
        </>
    );
}

export default ConvertationResume;
