import { Tab, Tabs } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setValueTab } from '../store/actions';

function Nav() {
    const dispatch = useDispatch();

    const handleChange = (event, newValue) => {
        dispatch(setValueTab(newValue));
    };

    const nav = useSelector((state) => state.navigationData);

    return (
        <>
            <Tabs value={nav.valueTab} indicatorColor='secondary' textColor='inherit' onChange={handleChange}>
                <Tab label='Поиск по ID' component={Link} to='/' disabled={nav.disabledId} />
                <Tab label='Поиск по ссылке' component={Link} to='/searchbylink' disabled={nav.disabledLink} />

                <Tab
                    label='Сконвертировать резюме'
                    component={Link}
                    to='/convertation'
                    disabled={nav.disabledConvertation}
                />

                <Tab label='Скачать резюме' component={Link} to='/download' disabled={nav.disabledDownload} />
            </Tabs>
        </>
    );
}

export default Nav;
