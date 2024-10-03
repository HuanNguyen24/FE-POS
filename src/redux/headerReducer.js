// Import action types
import { SET_HEADER_TITLE, SET_USER_INFO } from '../actions/actionTypes';

// Initial state
const initialState = {
    title: '',
    userName: '',
    role: '',
};

// Header reducer
export default function headerReducer (state = initialState, action) {
    switch (action.type) {
        case SET_HEADER_TITLE:
            return {
                ...state,
                title: action.payload
            };
        case SET_USER_INFO:
            return {
                ...state,
                username: action.payload.username,
                role: action.payload.role
            };
        default:
            return state;
    }
}

export function setHeaderTitle(title) {
    return dispatch => {
        dispatch({
            type: SET_HEADER_TITLE,
            payload: title
        })
    };
}

export function setUserInfo(username, role) {
    return dispatch => {
        dispatch({
            type: SET_USER_INFO,
            payload: { username, role }
        })
    };
}
