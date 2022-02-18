import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";

const sagaMiddleware = createSagaMiddleware();

const middelwares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middelwares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middelwares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;