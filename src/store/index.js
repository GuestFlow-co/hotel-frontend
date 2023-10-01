import { createStore,compose,applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import{ fetchRooms} from "./actions/RoomActions"
import rootReducer from"./reducers/Reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
//run once at the begining

store.dispatch(fetchRooms())

export default store