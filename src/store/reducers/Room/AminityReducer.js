import * as types from "../../actions/Type"
const initialState = {
  aminities: [],
  features: [],
  counter: 0,
  loading: true,
};

const AminityReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_AMINITYS:
      return {
        ...state,
        aminities: action.payload.aminities,
        loading: false,
      };
      case types.FETCH_FEATURE:
        return {
          ...state,
          features: action.payload.features,
          loading: false,
        };
    case types.ADD_AMINITY:
      return {
        ...state,
        aminities: [...state.aminities, action.payload.aminities],
      };
    case types.DELETE_AMINITY:
      return {
        ...state,
        aminities: state.aminities.filter((aminity) => aminity.id !== action.payload.aminityId),
      };
      case types.UPDATE_AMINITY:
        const updatedAminity = action.payload.updatedAminity;
  
        return {
          ...state,
          aminities: state.aminities.map((aminity) =>
            aminity.Aminity_id === updatedAminity.Aminity_id ? updatedAminity : aminity
          ),
        };
   
    default:
      return state;
  }
};

export default AminityReducer;