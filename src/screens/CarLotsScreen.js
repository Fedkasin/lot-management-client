import React from 'react';
import CarLotsContainer from '../containers/CarLotsContainer';
import TopBarButton from '../components/core/TopBarButton';

class CarLotsScreen extends React.Component {
  static navigationOptions = {
    title: 'Cars',
    headerRight: (
      <TopBarButton
        iconColor="#131313"
        iosIcon="ios-options"
        otherIcon="md-options"
        filters={[
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
              },
              buttons: [],
              checkboxes: [],
              inputs: [],
            },
          },
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
                },
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
                },
              ],
              inputs: [],
            },
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
                    options: ['Все страны', 'Беларусь (жыве!)', 'Россия (слава руси!)', 'Украина (слава героям!)', 'Казахстан(уважайте)', 'США (fuck yeah!)'],
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
              buttons: [],
              checkboxes: [],
              inputs: [],
            },
          },
        ]}
      />
    ),
  };

  render() {
    return <CarLotsContainer />;
  }
}

export default CarLotsScreen;
