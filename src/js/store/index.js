// The store in redux is kind of magic,it holds all the applications's state
// When an action is dispatched, the store forwards a message(the action object) to the reducer
import { createStore, applyMiddleware, compose} from "redux"
import rootReducer from "../reducers/index"
//import forbiddenWordsMiddleware  from "../middleware";
import thunk from "redux-thunk"

const initialState = {}

const middlewares = [thunk]

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// You may also pass an initail state to createStore
// useful for server side rendering and state preloading
// Dispatching an action means notifying the store that we intend to change the state.
const store = createStore(
    rootReducer,
    initialState,
    storeEnhancers(applyMiddleware(...middlewares))
  );

export default store