import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import { loginPageReducer } from './loginPageReducer';
import headerReducer from './headerReducer';
import taskbarReducer from './taskbarReducer';
import { tableReducer } from './tableReducer';
import foodListReducer from './foodListReducer';

// import foodAddReducer from "./foodAddReducer";

export const store = configureStore({
    // reducer: {
    //     loginReducer: combineReducers({ loginPageReducer }),
    //     headerReducer: combineReducers(headerReducer),
    //     // orderReducer: { orderPageReducer },
    //     // productReducer: { productPageReducer },
    // },
    reducer: combineReducers({ loginPageReducer, headerReducer, taskbarReducer, tableReducer, foodListReducer }),
    middleware: () => [thunk]
});
