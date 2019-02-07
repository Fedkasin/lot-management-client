import { call, put, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from "react-native"
import axios from 'axios';

import actions from '../actions/index';
import {
    FETCH_CAR_LOTS,
    FETCH_SETTINGS,
    FETCH_HOUSE_LOTS,
    UPDATE_HOUSE_WATCH_LOTS,
    CHANGE_SETTING,
} from '../constants/Actions';

function* fetchCarLots(action) {
    try {
        const start = action.payload.page*action.payload.itemsPerPage;
        const limit = action.payload.itemsPerPage;
        const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`);
        yield put(actions.carLotsActions.fetchCarLotsSuccess(response.data));
    } catch (err) {
        yield put(actions.carLotsActions.fetchCarLotsFail(err));
    }
}

function* updateWatchHouseLots(action) {
    try {
        // MIN-MAX -number ROOMS - array (spec). example: ?min=10&max=20&rooms[]=1&rooms[]=2
        yield put(actions.houseLotsActions.updateHouseWatchLotsSuccess(action.payload));
    } catch (err) {
        yield put(actions.houseLotsActions.updateHouseWatchLotsFail(err));
    }
}

function* fetchHouseLots(action) {
    try {
        // MIN-MAX -number ROOMS - array (spec). example: ?min=10&max=20&rooms[]=1&rooms[]=2
        const TOKEN = yield call(AsyncStorage.getItem, "@RootStore:NOTIFICATIONS_TOKEN");

        const API_ADDRESS = yield call(AsyncStorage.getItem, "@InputStore:Address");

        const response = yield call(axios.get, `https://${API_ADDRESS}/onliner?min=200&max=400&rooms[]=1&rooms[]=2`);

        yield put(actions.houseLotsActions.fetchHouseLotsSuccess(response.data));
    } catch (err) {
        yield put(actions.houseLotsActions.fetchHouseLotsFail(err));
    }
}

function* fetchSettings(action) {
    try {
        yield put(actions.settingsActions.fetchSettingsSuccess(action.payload));
    } catch (err) {
        yield put(actions.settingsActions.fetchSettingsFail(err));
    }
}

function* changeSetting(action) {
    try {
        if (action.payload.settingName === 'Address') {
            yield AsyncStorage.setItem('@InputStore:Address', action.payload.value);
        }
    } catch (err) {

    }
}

export function* changeSettingSaga() {
    yield takeLatest(CHANGE_SETTING, changeSetting);
}

export function* udateWatchHouseLotsSaga() {
    yield takeLatest(UPDATE_HOUSE_WATCH_LOTS, updateWatchHouseLots);
}

export function* fetchCarLotsSaga() {
    yield takeLatest(FETCH_CAR_LOTS, fetchCarLots);
}

export function* fetchHouseLotsSaga() {
    yield takeLatest(FETCH_HOUSE_LOTS, fetchHouseLots);
}

export function* fetchSettingsSaga() {
    yield takeLatest(FETCH_SETTINGS, fetchSettings);
}


