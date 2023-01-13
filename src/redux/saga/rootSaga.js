import {
    takeLatest
} from "redux-saga/effects";
import {
    GET_DATA
} from "../ducks/getCurrencyData";
import {
    handleGetData
} from "./handler/dataHandler";

export function* watcherSaga() {
    yield takeLatest(GET_DATA, handleGetData);
}