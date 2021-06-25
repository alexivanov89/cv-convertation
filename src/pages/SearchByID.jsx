import React from 'react';
import { makeStyles, Grid, Paper } from '@material-ui/core';
import SearchForm from '../components/SearchForm';

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

function SearchByID() {
    // const classes = useStyles();

    return (
        <>
            <SearchForm message='Введите id' title='id' />
        </>
    );
}

export default SearchByID;
