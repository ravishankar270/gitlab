import { createStore,applyMiddleware,combineReducers} from 'redux'
import authReducer from './reducers/authReducer'
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./saga/rootSaga";
import { issueReducer } from './reducers/issueReducer';

const reducer=combineReducers({
    auth:authReducer,
    issues:issueReducer
})

const sagaMiddleware = createSagaMiddleware();
const middleware=[sagaMiddleware]
const store=createStore(reducer,applyMiddleware(...middleware))
sagaMiddleware.run(watcherSaga);

export default store