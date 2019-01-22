import { call, put, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from "react-native"
import axios from 'axios';

import actions from '../actions';
import {
    FETCH_CAR_LOTS,
    FETCH_SETTINGS,
    FETCH_HOUSE_LOTS,
    UPDATE_HOUSE_WATCH_LOTS
} from '../constants/Actions';

const settingsMock = [
    {
        id: 'Api',
        label: 'Апи',
        children: {
            selects: {
                fromToSelects: [],
                nestedSelects: [],
                singleSelects: []
            },
            buttons: [],
            checkboxes: [],
            inputs: [
                {
                    id: 'Address',
                    parentId:'Api',
                    value: '',
                    placeholder: 'Address',
                    label: 'Адрес',
                    type: 'text'
                }
            ]
        }
    },
    // {
    //     id: 'Price',
    //     label: 'Цена',
    //     children: {
    //         selects: {
    //             fromToSelects: [
    //                 {
    //                     id: 'PriceFrom',
    //                     options: ['Любая', '1000', '2000', '3000', '4000', '5000', '10000'],
    //                     value: 'Любая',
    //                     label: 'От',
    //                 },
    //                 {
    //                     id: 'PriceTo',
    //                     options: ['Любая', '1000', '2000', '3000', '4000', '5000', '10000'],
    //                     value: 'Любая',
    //                     label: 'До',
    //                 },
    //             ],
    //             nestedSelects: [],
    //             singleSelects: [],
    //         },
    //         buttons: [
    //             {
    //                 id: 'Exchange',
    //                 options: ['BYN', 'USD', 'EUR'],
    //                 value: 'BYN',
    //                 label: 'Валюта',
    //             }
    //         ],
    //         checkboxes: [
    //             {
    //                 id: 'IsExchangeble',
    //                 options: null,
    //                 value: false,
    //                 label: 'Обмен',
    //             },
    //             {
    //                 id: 'WithDiagnostic',
    //                 options: null,
    //                 value: false,
    //                 label: 'С диагностикой',
    //             }
    //         ],
    //         inputs: [],
    //     }
    // },
    // {
    //     id: 'Placeholder',
    //     label: 'Местонахождение',
    //     children: {
    //         selects: {
    //             fromToSelects: [],
    //             nestedSelects: [
    //                 {
    //                     id: 'Country',
    //                     options: ['Все страны', 'Беларусь (жыве!)', 'Россия (слава руси!)', 'Украина (слава героям!)', 'Казахстан(уважайте)', 'США (fuck yeah!)', 'Канада (как я сюда попал?)'],
    //                     value: 'Все страны',
    //                     label: 'Страна',
    //                 },
    //                 {
    //                     id: 'Region',
    //                     options: ['Все области', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые'],
    //                     value: 'Все области',
    //                     label: 'Область',
    //                 },
    //                 {
    //                     id: 'Town',
    //                     options: ['Все области', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые'],
    //                     value: 'Все области',
    //                     label: 'Город',
    //                 },
    //             ],
    //             singleSelects: [],
    //         },
    //     }
    // },
    // {
    //     id: 'Model',
    //     label: 'Марка',
    //     children: {
    //         selects: {
    //             fromToSelects: [],
    //             nestedSelects: [
    //                 {
    //                     id: 'Mark',
    //                     options: ['Все марки', 'Toyota', 'Audi', 'Mercedes', 'BMW', 'Honda', 'VAZ', 'Valve'],
    //                     value: 'Все марки',
    //                     label: '',
    //                 },
    //                 {
    //                     id: 'PriceTo',
    //                     options: ['Все модели', 'Модель1', 'Модель2', 'Модель3', 'Модель4', 'Модель5'],
    //                     value: 'Все модели',
    //                     label: '',
    //                 },
    //             ],
    //             singleSelects: [],
    //         }
    //     }
    // }
];

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
        const TOKEN = yield call(AsyncStorage.getItem, '@RootStore:NOTIFICATIONS_TOKEN');

        const API_ADDRESS = yield call(AsyncStorage.getItem, '@InputsStore:Address');

        const response = yield call(axios.get, `https://${API_ADDRESS}/onliner?min=260&max=360&token=${TOKEN}`);

        yield put(actions.houseLotsActions.fetchHouseLotsSuccess(response.data));
    } catch (err) {
        yield put(actions.houseLotsActions.fetchHouseLotsFail(err));
    }
}

function* fetchSettings(action) {
    try {
        yield put(actions.settingsActions.fetchSettingsSuccess(settingsMock));
    } catch (err) {
        yield put(actions.settingsActions.fetchSettingsFail(err));
    }
}

export function* udateWatchHouseLotsSaga(data) {
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


