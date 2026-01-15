import {call, put, takeEvery} from 'redux-saga/effects';
import { fetchStockSuccess } from './stockSlice';

function* fetchStockSaga() {
    try{
        // 10.0.2.2 is used to access localhost from Android emulator
        const response = yield call(fetch, 'http://10.0.2.2:3000/api/stocks');
        const data = yield response.json();
        yield put(fetchStockSuccess(data));
    } catch (error) {
        yield put(fetchStockFailure(error.message));
    }
}

export function* watchStocks() {
    yield takeEvery('stocks/fetchStockRequest', fetchStockSaga);
}