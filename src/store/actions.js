export const RESUME = 'RESUME';

export const setResume = (resume) => ({
    type: RESUME,
    payload: resume,
});

export const VALUETAB = 'VALUETAB';

export const setValueTab = (value) => ({
    type: VALUETAB,
    payload: value,
});

export const DISABLED_CONVERTATION = 'DISABLED_CONVERTATION';

export const setdisableConvertation = (value) => ({
    type: DISABLED_CONVERTATION,
    payload: value,
});

export const DISABLED_DOWNLOAD = 'DISABLED_DOWNLOAD';

export const setdisableDownload = (value) => ({
    type: DISABLED_DOWNLOAD,
    payload: value,
});
