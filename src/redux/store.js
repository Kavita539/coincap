import {
    combineReducers,
    createStore,
    applyMiddleware
} from "redux";
import {
    dataReducer
} from "./ducks/getCurrencyData";
import {
    pageReducer
} from "./ducks/incrementPage";
import createSagaMiddleware from "@redux-saga/core";
import {
    watcherSaga
} from "./saga/rootSaga";

const reducer = combineReducers({
    counter: pageReducer,
    data: dataReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export {store};