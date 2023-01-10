import { configureStore } from '@reduxjs/toolkit'

import AppReducers from './reducers/AppReducers'

const store = configureStore({
    reducer:
    {
        app: AppReducers,
    }
});

export default store;