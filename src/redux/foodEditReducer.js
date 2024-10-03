// Import action type
import { UPDATE_PRODUCT } from "../actions/actionTypes";

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
    case UPDATE_PRODUCT:
      return {
        ...state,
        food: action.payload,
      };
    default:
      return state;
  }
}

// Define action creator
export function updateProduct(product) {
  return {
    type: UPDATE_PRODUCT,
    payload: product,
  };
}
