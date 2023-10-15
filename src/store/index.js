import { createStore,compose,applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import{ fetchComments, fetchRooms} from "./actions/Rooms/RoomActions"
// import{ checkForToken} from "./actions/Auth/AuthActions"
import rootReducer from"./reducers/Reducer"
import { fetchAminities, fetchRoomAminities } from './actions/Rooms/AminityActions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
//run once at the begining

store.dispatch(fetchRooms())
store.dispatch(fetchComments())
store.dispatch(fetchAminities())
store.dispatch(fetchRoomAminities())
// store.dispatch(checkForToken())


export default store