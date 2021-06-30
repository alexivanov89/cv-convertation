import { combineReducers } from 'redux';
import { setResumeReducer } from './resumeReducer';
import { setNavigationReducer } from './navigationReducer';

export const reducers = combineReducers({
    initialresume: setResumeReducer,
    navigationData: setNavigationReducer,
});
