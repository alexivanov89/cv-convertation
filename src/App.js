import { useState } from 'react';
import { AppBar, Container, Toolbar, makeStyles, Tabs, Tab, Grid, Paper } from '@material-ui/core';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import ConvertationResume from './pages/ConvertationResume';
import SearchByID from './pages/SearchByID';
import SearchByLink from './pages/SearchByLink';
import DownloadResume from './pages/DownloadResume';
import logo from './static/logo.png';

import './App.css';

const useStyles = makeStyles((theme) => ({
    header: {},

    logo: {
        padding: '8px 0',
        width: '45px',
        height: '45px',
    },

    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    tab: {
        // fontSize: 10,
    },
}));

function App() {
    const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Router>
                <Container maxWidth='md'>
                    <Paper>
                        <Route path='/'>
                            <AppBar position='sticky' className={classes.header}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                        <img src={logo} alt='logo' className={classes.logo} />
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Toolbar>
                                            <Tabs
                                                value={value}
                                                indicatorColor='secondary'
                                                textColor='default'
                                                onChange={handleChange}
                                            >
                                                <Tab
                                                    className={classes.tab}
                                                    label='Поиск по ID'
                                                    component={Link}
                                                    to='/'
                                                />
                                                <Tab label='Поиск по ссылке' component={Link} to='/searchbylink' />

                                                <Tab
                                                    label='Сконвертировать резюме'
                                                    component={Link}
                                                    to='/convertation'
                                                />

                                                <Tab label='Скачать резюме' component={Link} to='/download' />
                                            </Tabs>
                                        </Toolbar>
                                    </Grid>
                                </Grid>
                            </AppBar>
                        </Route>

                        <Switch>
                            <Route exact path='/' render={(props) => <SearchByID {...props} />}></Route>
                            <Route path='/searchbylink' component={SearchByLink}></Route>
                            <Route path='/convertation' component={ConvertationResume}></Route>
                            <Route path='/download' component={DownloadResume}></Route>
                            <Redirect to='/' />
                        </Switch>
                    </Paper>
                </Container>
            </Router>
        </>
    );
}

export default App;
