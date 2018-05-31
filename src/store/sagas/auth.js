import { delay } from "redux-saga";
import { put } from "redux-saga/effects";

import * as actions from "../actions/index";

export function* logoutSaga(action) {
    yield localStorage.removeItem("token");
    yield localStorage.removeItem("expirationDate");
    yield localStorage.removeItem("userId");
    yield put(actions.logoutSucceed());
}

export function* checkoutTimeoutSaga(action) {
    yield delay(action.exirationTime * 1000);
    yield put(actions.logout());
}
