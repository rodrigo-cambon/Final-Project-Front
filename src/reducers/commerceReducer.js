const initialState = {
  token: "",
  user: {},
  products: [],
  subtotal: 0,
  firsttime: true,
};
export default function commerceReducer(state = initialState, action) {
  switch (action.type) {
    case "CURRENT_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "TOKEN_USER":
      return {
        ...state,
        token: action.payload,
      };
    case "LOGOUT":
      return (state = initialState);

    case "ADD_PRODUCT":
      const productToAdd = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (productToAdd) {
        productToAdd.quantity =
          Number(productToAdd.quantity) + Number(action.payload.quantity);
        return { ...state };
      } else {
        return {
          ...state,
          products: [action.payload, ...state.products],
        };
      }
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product.id !== action.payload),
        ],
      };
    case "CHANGE_QUANTITY":
      const productToChange = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (productToChange) {
        productToChange.quantity = action.payload.updateQuantity;
        return { ...state };
      }
      break;

    case "ADD_TOTAL":
      return {
        ...state,
        subtotal: state.subtotal + action.payload,
      };
    case "REMOVE_TOTAL":
      return {
        ...state,
        subtotal: state.subtotal - action.payload,
      };

    case "ORDER_PLACED":
      return {
        ...state,
        products: [],
      };
    case "CLEAR_TOTAL":
      return {
        ...state,
        subtotal: 0,
      };
    case "FIRST_TIME":
      return {
        ...state,
        firsttime: false,
      };

    default:
      return state;
  }
}
