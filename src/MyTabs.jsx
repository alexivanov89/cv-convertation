import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Paper } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    container: {
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
}));

export default function MyTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Tabs value={value} onChange={handleChange} aria-label='simple tabs example'>
                    <Tab label='Поиск по ID' {...a11yProps(0)} />
                    <Tab label='Поиск по ссылке' {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className={classes.container}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>Поле ввода ID</Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>Загрузить резюме</Paper>
                        </Grid>
                    </Grid>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className={classes.container}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>Поле ввода ссылки</Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>Загрузить резюме</Paper>
                        </Grid>
                    </Grid>
                </div>
            </TabPanel>
        </div>
    );
}
