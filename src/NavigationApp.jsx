import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BackupIcon from '@material-ui/icons/Backup';
import GetAppIcon from '@material-ui/icons/GetApp';
import BuildIcon from '@material-ui/icons/Build';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export default function NavigationApp() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                label='Load'
                icon={
                    <NavLink to='/load' exact>
                        <BackupIcon />
                    </NavLink>
                }
            />
            <BottomNavigationAction
                label='Convertation'
                icon={
                    <NavLink to='/convertation' exact>
                        <BuildIcon />
                    </NavLink>
                }
            />
            <BottomNavigationAction
                label='Download'
                icon={
                    <NavLink to='/download' exact>
                        <GetAppIcon />
                    </NavLink>
                }
            />
        </BottomNavigation>
    );
}
