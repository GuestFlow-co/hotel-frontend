import * as types from "../../actions/Type";

const initialState = {
  resturants: [],
  counter: 0,
  loading: true,
};

const ResturantReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RESTURANTS:
      return {
        ...state,
        resturants: action.payload.resturants,
        loading: false,
      };
    case types.ADD_RESTURANT:
      return {
        ...state,
        resturants: [...state.resturants, action.payload.resturants],
      };
    case types.DELETE_RESTURANT:
      return {
        ...state,
        resturants: state.resturants.filter((resturant) => resturant.id !== action.payload.resturantId),
      };
      case types.UPDATE_RESTURANT:
        const updatedResturant = action.payload.updatedResturant;
  
        return {
          ...state,
          resturants: state.resturants.map((resturant) =>
            resturant.Resturant_id === updatedResturant.Resturant_id ? updatedResturant : resturant
          ),
        };
    default:
      return state;
  }
};

export default ResturantReducer;