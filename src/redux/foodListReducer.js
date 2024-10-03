import { toast } from "react-toastify";
import { ALLFOOD, FOODBYCATEGORY } from "../api/url";
import instance from "../api/util";

const initialState = {
    foodList: [],
};

const getFoodList = async (name, price, remain, category, active, imgURL, createTime) => {
    try {
        const params = {
            "name": name,
            "price": price,
            "quantity": remain,
            "categoryID": category,
            "active": active,
            "imgURL": imgURL,
            "createdTime": createTime
        }
        const response = await instance.get(ALLFOOD, params);
        if (response.request.status === 200) {
            return response.data;
        }
    }
    catch (error) {
        toast.error('Get Items Fail',{autoClose: 2000});
        return {error};
    }
}

const getFoodList2 = (cate) => async (name, price, remain, category, active, imgURL, createTime) => {
    try {
        const params = {
            "name": name,
            "price": price,
            "quantity": remain,
            "categoryID": category,
            "active": active,
            "imgURL": imgURL,
            "createdTime": createTime
        }
        const url = FOODBYCATEGORY + cate + "&minPrice=0&maxPrice=200000&minQuantity=0&maxQuantity=999";
        const response = await instance.get(url, params);
        if (response.request.status === 200) {
            return response.data;
        }
    }
    catch (error) {
        toast.error('Get Items Fail', { autoClose: 2000 });
        return { error };
    }
}

const getFoodList2 = (cate) => async (name, price, remain, category, active, imgURL, createTime) => {
    try {
        const params = {
            "name": name,
            "price": price,
            "quantity": remain,
            "categoryID": category,
            "active": active,
            "imgURL": imgURL,
            "createdTime": createTime
        }
        const url = FOODBYCATEGORY + cate + "&minPrice=0&maxPrice=200000&minQuantity=0&maxQuantity=999";
        const response = await instance.get(url, params);
        if (response.request.status === 200) {
            return response.data;
        }
    }
    catch (error) {
        toast.error('Get Items Fail', { autoClose: 2000 });
        return { error };
    }
}

export default function foodListReducer(state = initialState, action) {
    console.log(124);
    switch (action.type) {
        case 'GET_ALL_FOOD':
            return {
                ...state,
                foodList: action.payload
            };
        case 'GET_FOOD_BY_CATEGORY':
            return {
                ...state,
                foodList: action.payload
            };
        case 'GET_FOOD_BY_CATEGORY':
            return {
                ...state,
                foodList: action.payload
            };
        default:
            return state;
    }
}

export function getAllFood() {
    return async dispatch => {
        let res = await getFoodList();
        dispatch({
            type: 'GET_ALL_FOOD',
            payload: res
        })
    };
}

export function getFoodByCategory(category) {
    return async dispatch => {
        let res2 = await getFoodList2(category);
        dispatch({
            type: 'GET_FOOD_BY_CATEGORY',
            payload: res2
        })
    };
}
