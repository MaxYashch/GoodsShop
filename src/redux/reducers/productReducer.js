import ActionTypes from '../contants/actionTypes';

const initiialState = {
  products: [
    {
      id: 0,
      title: '',
      category: '',
    },
  ],
};

// export const productReducer = (state, action) => {
const productReducer = (state = initiialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};

export default productReducer;
