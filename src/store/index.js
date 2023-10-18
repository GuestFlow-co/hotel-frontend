import { createStore,compose,applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import{ fetchComments, fetchRooms} from "./actions/Rooms/RoomActions"
import{ checkForToken, fetchUsers} from "./actions/Auth/AuthActions"
import rootReducer from"./reducers/Reducer"
import { fetchResturants } from './actions/resturant/ResturantAction';
import { fetchAminities, fetchRoomAminities } from './actions/Rooms/AminityActions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
//run once at the begining

store.dispatch(fetchRooms())
store.dispatch(fetchResturants())

store.dispatch(fetchComments())
store.dispatch(fetchAminities())
store.dispatch(fetchRoomAminities())
store.dispatch(fetchUsers())


export default store