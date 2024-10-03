
const API = {
  USER: {
    LOGIN: '/authorization/login'
  },
  FOOD: {
    GETALLFOOD: '/food/all',
    GETFOODBYCATEGORY: '/food?categoryId=',
    CATEGORY: '/categories',
    // GETFOODID: '/food'
  },
  ORDER: {
    GETALLORDER: '/orders/all',
    ACCESSORDERS: '/orders'
  }

}

export default API;
