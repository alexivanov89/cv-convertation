import { AppBar, Container, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import ConvertationResume from './ConvertationResume';
import LoadingResume from './LoadingResume';
import DownloadResume from './DownloadResume';
import NavigationApp from './NavigationApp';
import logo from './static/logo.png';

import classNames from 'classnames';
import './App.css';

let theme = createMuiTheme({
    typography: {
        h6: {
            fontSize: 10,
        },
    },
});

const useStyles = makeStyles((theme) => ({
    header: {
        // color: 'black',
    },
    app: {
        backgroundColor: '#cfe8fc',
        padding: '0',
        height: '90vh',
    },
    logo: {
        paddingRight: '8px',
        width: '24px',
        height: '24px',
    },
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

const routes = ['/load', '/convertation', '/download'];

function App() {
    const classes = useStyles();
    return (
        <>
            <Router>
                <Container maxWidth='sm' className={classes.app}>
                    <Route path='/'>
                        <AppBar position='sticky' className={classes.header}>
                            <Toolbar>
                                <img src={logo} alt='logo' className={classes.logo} />
                                <ThemeProvider theme={theme}>
                                    <Typography variant='h6' color='textPrimary'>
                                        Конвертация резюме
                                    </Typography>
                                </ThemeProvider>
                                <NavigationApp className={classes.navigation} />
                            </Toolbar>
                        </AppBar>
                    </Route>

                    <Switch>
                        <Route path='/load' exact component={LoadingResume}></Route>
                        <Route path='/convertation' exact component={ConvertationResume}></Route>
                        <Route path='/download' exact component={DownloadResume}></Route>
                    </Switch>
                </Container>
            </Router>
        </>
    );
}

export default App;
