import { DISABLED_CONVERTATION, DISABLED_DOWNLOAD, VALUETAB } from './actions.js';

const initialState = {
    disabledId: false,
    disabledLink: false,
    disabledConvertation: true,
    disabledDownload: true,
    valueTab: 0,
};

export const setNavigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case VALUETAB:
            return {
                ...state,
                valueTab: action.payload,
            };
        case DISABLED_CONVERTATION:
            return {
                ...state,
                disabledConvertation: action.payload,
            };
        case DISABLED_DOWNLOAD:
            return {
                ...state,
                disabledDownload: action.payload,
            };
        default:
            return state;
    }
};
