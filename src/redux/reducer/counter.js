import { counter } from "../action-type";

const initialState = { firstCounter: 1, secondCounter: 2, thirdCounter: 3 };

// reducer配置
const handers = {
  [counter.INCREMENT]: (state, action) => ({
    ...state,
    [action.payload]: state[action.payload] + 1,
  }),

  [counter.DECREMENT]: (state, action) => ({
    ...state,
    [action.payload]: state[action.payload] - 1,
  }),
};

// reducer
export default function (state = initialState, action) {
  const hander = handers[action.type];
  if (!hander) {
    return state;
  }

  return hander(state, action);
}
