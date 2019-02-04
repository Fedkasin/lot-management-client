import React from 'react';
import  { connect } from 'react-redux';
import { ScrollView, ActivityIndicator, AsyncStorage } from 'react-native';

import SettingSectionItem from '../components/settings/SettingSectionItem';
import actions from '../actions';

const DEFAULT_ADDR = '0e40c705.ngrok.io';

class SettingsContainer extends React.Component {
    async componentDidMount() {
        let addr = await AsyncStorage.getItem("@InputsStore:Address");

        if (!addr) {
            await AsyncStorage.setItem("@InputStore:Address", DEFAULT_ADDR);
            addr = await AsyncStorage.getItem("@InputStore:Address");
        }

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
                            value: addr || '',
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

        this.props.onFetchSettings(settingsMock);
    }

    render() {
        if (this.props.isFetching) {
            return <ActivityIndicator></ActivityIndicator>
        } else {
            return (
                <ScrollView>
                    {this.props.settings.map((value, key) => { return <SettingSectionItem
                        key={key}
                        sectionIndex={key}
                        setting={value} /> })}
                </ScrollView>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        settings: state.settingsReducers.settings,
        isFetching: state.settingsReducers.isFetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchSettings: (data) => dispatch(actions.settingsActions.fetchSettings(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
