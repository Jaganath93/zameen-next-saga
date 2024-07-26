import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { location } from "./reducers/location";
import { noImage } from "./reducers/noImage";
import { villasData } from "./reducers/villasData";
import { rootSaga } from "./saga";


const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
    location,
    noImage,
    villasData
});

export const store = createStore(rootReducers, compose(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga)