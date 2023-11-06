import { USERDATA,FINALCARTVIEW, ADDITEMTOCART , REMOVEITEMTOCART } from "./types";

export const userReducer = (state = { dataCame: [] }, action) => {
  switch (action.type) {
    case USERDATA:
      return { ...state, dataCame:  action.payload };
    case FINALCARTVIEW:
      return { ...state, finalProducts: action.payload };
    case ADDITEMTOCART:
      return { ...state , itemAdded : action.payload};
      case REMOVEITEMTOCART:
        return { ...state, itemAdded: action.payload };
    default: {
      return state;
    }
  }
};