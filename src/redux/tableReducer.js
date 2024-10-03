import {ALLORDER} from '../api/url';
import { toast } from "react-toastify";
import instance from '../api/util';
import { SET_HEADER_TITLE, SET_USER_INFO } from '../actions/actionTypes';
const initialState = {
    column: [
        {
            name: 'TableId',
            key: 'tabledID'
        },
        {
            name: 'Order Time',
            key: 'order_Time'
        },
        {
            name: 'Order Day',
            key: 'orderDate'
        },
        {
            name: 'Total',
            key: 'sum'
        },
        {
            name: 'Status',
            key: 'statusCode'
        }
    ],
    isShow: false,
    table:[],
    statusCode:0,
    page: '',
    limit: '',
}
// const initialState = {
//     title: '123',
//     userName: '123',
//     role: '123',
// };
const getDataOrder = async (statusCode) => {
    try {
        console.log(statusCode,"ssss");
        if(statusCode === 0 || statusCode === 1 || statusCode === 2){
            console.log("gg");
            const response = await instance.get(`${ALLORDER}?statusCode=${statusCode}`);
            if (response.request.status === 200) {
                console.log(25,response.data);
            return response.data;
        }
        else{
            const response = await Promise.all([
            instance.get(`${ALLORDER}?statusCode=0`),
            instance.get(`${ALLORDER}?statusCode=1`),
            instance.get(`${ALLORDER}?statusCode=2`)
            ]);
            const data = response.map((res) => res.data);
            return data.flat();
        }
     }
    }
    catch (error) {
        toast.error('Get Items Fail',{autoClose: 2000});
        return {error};
    }
    }

// const getData = async (statusCode) => {
//     try {
//         const response = await Promise.all([
//             instance.get(`${ALLORDER}?statusCode=0`),
//             instance.get(`${ALLORDER}?statusCode=1`),
//             instance.get(`${ALLORDER}?statusCode=2`)
//         ]);
//         const data = response.map((res) => res.data);
//         console.log(data);  
//         // console.log(1);
//         // console.log(2,data.flat());
//         return data.flat();
//     } catch (error) {
//         toast.error('Failed to fetch data',{autoClose: 2000});
//         return {error};
//     }
// }
// export function table(statusCode = 0) {
//     console.log(1);
//     return async dispatch => {
//         let res = await getData(statusCode);
//         dispatch({ type:'GET_ORDER', payload: res });
//     }
// }

// export const tableReducer = (state = null, action) => {
//     switch (action.type) {
//         case 'GET_ORDER':
//             return {
//                 ...state,
//             }
//         // case 'LOGOUT':
//         //     return {
//         //         ...state,
//         //         isLogin: false
//         //     }
//         default:
//             return state;
//     }
// }
// Header reducer
export const  tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CHANGE_STATUS':
            console.log(action.payload,"dsdsd")
            // initialState.table = action.payload.table,
            // initialState.statusCode = action.payload.statusCode
            return{
                ...state,
                table: action.payload.table,
                statusCode: action.payload.statusCode
            }
        default:
            return state;
    }
}
export function getChangeStatus(statusCode) {
    console.log("bbb",statusCode);
    return async dispatch => {
        let res = await getDataOrder(statusCode);
        console.log(res,"res");
        if(res.error){
            // toast loi
            console.log(1)
            } else {
            dispatch({
                type: 'GET_CHANGE_STATUS',
                payload: { statusCode: res.orderList[0].statuscode,
                        table : res.orderList,
                }
            })
        }
    };
}

