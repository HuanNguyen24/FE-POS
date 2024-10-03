import { CATEGORY } from "../api/url";
import instance from "../api/util";

const initialState = {
    categories: [],
}

const getCategory = async (name, categoryId) => {
    try {
        const params = {
            "name": name,
            "categoryId": categoryId
        }
        const response = await instance.get(CATEGORY, params);
        if (response.request.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error('Get categories Fail', error);
    }
};

export default function categoryReducer(state = initialState, action) {
    console.log(123);
    switch (action.type) {
        case 'GET_ALL_CATEGORY':
            return {
                ...state,
                foodList: action.payload
            };
        default:
            return state;
    }
}

// export default function categoryReducer(state = initialState, action) {
//     console.log(123);
//     switch (action.type) {
//         case 'GET_ALL_CATEGORY':
//             console.log('action', action.payload);
//             return {
//                 ...state,
//                 categories: action.payload
//             };
//         default:
//             return state;
//     }
// }

export function getAllCategory() {
    return async dispatch => {
        let res = await getCategory();
        console.log('res', res);
        dispatch({
            type: 'GET_ALL_CATEGORY',
            payload: res
        })
    };
}

// export function getAllCategory() {
//     return async dispatch => {
//         let res = await getCategory();
//         console.log('res', res);
//         dispatch({
//             type: 'GET_CATEGORY',
//             payload: res
//         })
//     };
// }
