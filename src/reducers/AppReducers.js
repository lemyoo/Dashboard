import {
    SHOW_SIDE_MENU,
    MODE
} from '../types/AppTypes'

const initialState = {
    show_side_menu: true,
    mode: true,
};

const AppReducers = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SIDE_MENU:
            return { ...state, show_side_menu: action.payload.data };
        case MODE:
            return { ...state, mode: action.payload.data };
        default:
            return state;
    }
};

export default AppReducers
