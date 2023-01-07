import {
    SHOW_SIDE_MENU
} from '../types/AppTypes';

export const showSideMenuAction = (data) => {
    return {
        type: SHOW_SIDE_MENU,
        payload: {
            data: data,
        },
    };
};
