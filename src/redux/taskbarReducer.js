import { TOGGLE_SIDEBAR } from '../actions/actionTypes';

const initialState = {
    isOpen: true,
}

export default function taskbarReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                isOpen: !state.isOpen
            }
        default:
            return state;
    }
}

export function toggleSidebar() {
    return dispatch => {
        dispatch({
            type: TOGGLE_SIDEBAR
        })
    }
}