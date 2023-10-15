import { createStore,compose,applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import{ fetchRooms} from "./actions/RoomActions"
// import{ checkForToken} from "./actions/Auth/AuthActions"
import rootReducer from"./reducers/Reducer"
import { fetchResturants } from './actions/resturant/ResturantAction';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
//run once at the begining

store.dispatch(fetchRooms())
store.dispatch(fetchResturants())

// store.dispatch(checkForToken())


export default store