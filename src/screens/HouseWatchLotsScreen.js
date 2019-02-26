import React from 'react';
import HouseWatchLotsContainer from '../containers/HouseWatchLotsContainer';
import TopBarButton from '../components/core/TopBarButton';

class HouseWatchScreen extends React.Component {
    static navigationOptions = {
      title: 'Houses (Live)',
      headerRight: (
        <TopBarButton
          iconColor="#131313"
          iosIcon="ios-options"
          otherIcon="md-options"
          filters={[
            {
              id: 'Placeholder',
              label: 'Местонахождение (Live)',
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
          ]}
        />
      ),
    };

    render() {
      return <HouseWatchLotsContainer />;
    }
}

export default HouseWatchScreen;
