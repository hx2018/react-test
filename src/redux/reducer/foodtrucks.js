import { foodtrucks } from "../action-type";

const initialState = {
  foodTrucksList: [],
};

const handers = {
  [foodtrucks.SET_FOOD_TRUCKS_LIST]: (state, action) => ({
    ...state,
    foodTrucksList: action.payload,
  }),
};

export default function (state = initialState, action) {
  if (!handers[action.type]) {
    return state;
  }
  return handers[action.type](state, action);
}
