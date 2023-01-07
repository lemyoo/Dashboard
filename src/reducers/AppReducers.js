import {
    SHOW_SIDE_MENU
} from '../types/AppTypes'

const initialState = {
    show_side_menu: true
};

const AppReducers = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SIDE_MENU:
            return { ...state, show_side_menu: action.payload.data };
        default:
            return state;
    }
};

export default AppReducers
