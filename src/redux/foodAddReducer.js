// Import action type
import { ADD_PRODUCT } from "../actions/actionTypes";

// Define initial state
const initialState = {
  image: "",
  categoryID: "",
  name: "",
  quantity: "",
  price: "",
  active: "",
  food: null,
};

// Define reducer
export default function foodEditReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        food: action.payload,
      };
    default:
      return state;
  }
}

// Define action creator
export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}
