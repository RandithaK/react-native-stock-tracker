import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import stockReducer from "../features/stocks/stockSlice";
import { watchStocks } from "../features/stocks/stockSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        stocks: stockReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchStocks);

export default store;