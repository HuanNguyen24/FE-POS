import API from "./enpoint";
// export const API_BASE_URL = 'http://192.168.1.37:6543/api';
export const API_BASE_URL =
    "https://demo-be-miniproject-production.up.railway.app/api";
// export const API_BASE_URL = "http://localhost:3000/api";

const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const LOGIN = getApiUrl(API.USER.LOGIN);
export const ALLFOOD = getApiUrl(API.FOOD.GETALLFOOD);
export const CATEGORY = getApiUrl(API.FOOD.CATEGORY);
export const ALLORDER = getApiUrl(API.ORDER.GETALLORDER);
export const ACCESSORDERS = getApiUrl(API.ORDER.ACCESSORDERS);
export const FOODBYCATEGORY = getApiUrl(API.FOOD.GETFOODBYCATEGORY);
export const UPDATEFOOD = getApiUrl(API.FOOD.UPDATEFOOD);
// export const FOODBYCATEGORY = getApiUrl(API.FOOD.FOODBYCATEGORY);
