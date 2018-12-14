import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import actions from '../actions';
import { FETCH_LOTS, FETCH_SETTINGS } from '../constants/Actions';

const settingsMock = [
    {
        id: 'Price',
        label: 'Цена',
        children: {
            selects: {
                fromToSelects: [
                    {
                        id: 'PriceFrom',
                        options: ['Любая', '1000', '2000', '3000', '4000', '5000', '10000'],
                        value: 'Любая',
                        label: 'От',
                    },
                    {
                        id: 'PriceTo',
                        options: ['Любая', '1000', '2000', '3000', '4000', '5000', '10000'],
                        value: 'Любая',
                        label: 'До',
                    },
                ],
                nestedSelects: [],
                singleSelects: [],
            },
            buttons: [
                {
                    id: 'Exchange',
                    options: ['BYN', 'USD', 'EUR'],
                    value: 'BYN',
                    label: 'Валюта',
                }
            ],
            checkboxes: [
                {
                    id: 'IsExchangeble',
                    options: null,
                    value: false,
                    label: 'Обмен',
                },
                {
                    id: 'WithDiagnostic',
                    options: null,
                    value: false,
                    label: 'С диагностикой',
                }
            ]
        }
    },
    {
        id: 'Placeholder',
        label: 'Местонахождение',
        children: {
            selects: {
                fromToSelects: [],
                nestedSelects: [
                    {
                        id: 'Country',
                        options: ['Все страны', 'Беларусь (жыве!)', 'Россия (слава руси!)', 'Украина (слава героям!)', 'Казахстан(уважайте)', 'США (fuck yeah!)', 'Канада (как я сюда попал?)'],
                        value: 'Все страны',
                        label: 'Страна',
                    },
                    {
                        id: 'Region',
                        options: ['Все области', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые'],
                        value: 'Все области',
                        label: 'Область',
                    },
                    {
                        id: 'Town',
                        options: ['Все области', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые'],
                        value: 'Все области',
                        label: 'Город',
                    },
                ],
                singleSelects: [],
            },
        }
    },
    {
        id: 'Model',
        label: 'Марка',
        children: {
            selects: {
                fromToSelects: [],
                nestedSelects: [
                    {
                        id: 'Mark',
                        options: ['Все марки', 'Toyota', 'Audi', 'Mercedes', 'BMW', 'Honda', 'VAZ', 'Valve'],
                        value: 'Все марки',
                        label: '',
                    },
                    {
                        id: 'PriceTo',
                        options: ['Все модели', 'Модель1', 'Модель2', 'Модель3', 'Модель4', 'Модель5'],
                        value: 'Все модели',
                        label: '',
                    },
                ],
                singleSelects: [],
            }
        }
    }
];

function* fetchLots(action) {
    try {
        const start = action.payload.page*action.payload.itemsPerPage;
        const limit = action.payload.itemsPerPage;
        const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`);
        yield put(actions.lotsActions.fetchLotsSuccess(response.data));
    } catch (err) {
        yield put(actions.lotsActions.fetchLotsFail(err));
    }
}

function* fetchSettings(action) {
    try {   
        yield put(actions.settingsActions.fetchSettingsSuccess(settingsMock));
    } catch (err) {
        yield put(actions.settingsActions.fetchSettingsFail(err));
    }
}

export function* fetchLotsSaga() {
    yield takeLatest(FETCH_LOTS, fetchLots);
}

export function* fetchSettingsSaga() {
    yield takeLatest(FETCH_SETTINGS, fetchSettings);
};