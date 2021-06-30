import { AppBar, Container, Toolbar, makeStyles, Grid, Paper } from '@material-ui/core';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import ConvertationResume from './pages/ConvertationResume';
import SearchByID from './pages/SearchByID';
import SearchByLink from './pages/SearchByLink';
import DownloadResume from './pages/DownloadResume';
import logo from './static/logo.png';

import './App.css';
import Nav from './components/Nav';

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
}));

function App() {
    const classes = useStyles();

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
                                            <Nav />
                                        </Toolbar>
                                    </Grid>
                                </Grid>
                            </AppBar>
                        </Route>

                        <Switch>
                            <Route exact path='/' component={SearchByID}></Route>
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
