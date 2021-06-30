import { RESUME } from './actions.js';

const initialState = null;

export const setResumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESUME:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};
