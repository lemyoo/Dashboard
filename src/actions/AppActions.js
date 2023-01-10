import {
    SHOW_SIDE_MENU,
    MODE
} from '../types/AppTypes';

export const showSideMenuAction = (data) => {
    return {
        type: SHOW_SIDE_MENU,
        payload: {
            data: data,
        },
    };
};

export const changeModeAction = (data) => {
    return {
        type: MODE,
        payload: {
            data: data,
        },
    };
};

