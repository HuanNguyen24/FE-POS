import { toast } from "react-toastify";
import { LOGIN } from "../api/url";
import { setLocalAccessToken } from "../api/util";
import instance from "../api/util";
// import { setUserInfo } from "./headerReducer";

const initialState = {
    isLogin: false,// Init State 
    username: '',
    password: '',
    validationMsg: {},
    isLoading: false
}
const getData = async (username, password) => {
    try {
        const params = {
            "userName": username,
            "pwd": password
        }

        try {
            const params = { 
                "userName": username,
                "pwd": password
            }
            console.log({ params })

            const response = await instance.post(LOGIN, params);
            console.log('got response', response);
            if (response.request.status === 200) {
                setLocalAccessToken(response.data.accessToken);
                // console.log(token)  
                toast.success('Login Success', { autoClose: 2000 });
                // window.location.href = '/category';
                // return response;
                return {}
            }
        } catch (error) {
            toast.error('Login Fail', { autoClose: 2000 });
            return { error };
        }
        const response = await instance.post(LOGIN, params);
        if (response.request.status === 200) {
            setLocalAccessToken(response.data.accessToken);
            toast.success('Login Success', { autoClose: 2000 });
            window.location.href = '/category';
        }
    } catch (error) {
        toast.error('Login Fail', { autoClose: 2000 });
        return { error };
    }
    const response = await instance.post(LOGIN, params);
    if (response.request.status === 200) {
        setLocalAccessToken(response.data.accessToken);
        toast.success('Login Success', { autoClose: 2000 });
        // window.location.href = '/category';
        // return response;
        return {}
    }
}
export const loginPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLogin: true,
                username: action.payload.username,
            }
        case 'LOGOUT':
            return {
                ...state,
                isLogin: false
            }
        case 'START_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'STOP_LOADING':
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}
export function login(username, password, done) {
    return async dispatch => {
        dispatch({ type: 'START_LOADING' });
        let res = await getData(username, password);
        if (res.error) {
            // toast loi
        } else {
            dispatch({
                type: 'LOGIN',
                payload: { username: res.username, password: res.password }
            })
            done && done();
        }
        console.log({ res });
        dispatch({
            type: 'LOGIN',
            payload: { username: res.username, password: res.password }
        })
        dispatch({ type: 'STOP_LOADING' });
    };
}


