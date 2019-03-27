import React from 'react';
import HouseLotsContainer from '../containers/HouseLotsContainer';
import TopBarButton from '../components/core/TopBarButton';

class HouseLotsScreen extends React.Component {
  static navigationOptions = {
    title: 'Houses',
    headerRight: (
      <TopBarButton
        iconColor="#131313"
        iosIcon="ios-options"
        otherIcon="md-options"
        filters={[
          {
            id: 'Placeholder',
            label: 'Комнаты',
            children: {
              selects: {
                fromToSelects: [],
                nestedSelects: [
                  {
                    id: 'Country',
                    options: ['1', '2', '3', '4+'],
                    value: 'Любое',
                    label: 'Количество',
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
                    options: ['50', '1000', '2000', '3000', '4000', '5000', '5500'],
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
              sliders: [
                {
                  id: 'priceFromSlider',
                  text: 'PriceFrom',
                },
              ],
            },
          },
        ]}
      />
    ),
  };

  render() {
    return <HouseLotsContainer />;
  }
}

export default HouseLotsScreen;
