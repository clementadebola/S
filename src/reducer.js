export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
        // const alreadyExist = state.cartItems.find(item => item.name === action.payload?.name)
        // if(alreadyExist){
        //     alreadyExist['count'] += 1
        // }
        return { cartItems:[...state.cartItems, action.payload]}
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
