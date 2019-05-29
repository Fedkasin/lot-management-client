import React from 'react';
import t from '../helpers/i18helper';
import CarLotsContainer from '../containers/CarLotsContainer';
import TopbarNavButton from '../components/core/TopbarNavButton';
import { CAR_LOTS_FILTER_SCREEN } from '../constants/Routes';
import * as Colors from '../constants/Colors';

class CarLotsScreen extends React.PureComponent {
  static navigationOptions = {
    title: t('CARS'),
    headerRight: (
      <TopbarNavButton
        iconColor={Colors.black}
        iosIcon="ios-options"
        otherIcon="md-options"
        routeName={CAR_LOTS_FILTER_SCREEN}
      />
    ),
    headerStyle: {
      backgroundColor: Colors.silver,
    },
  };

  render() {
    return <CarLotsContainer />;
  }
}

export default CarLotsScreen;
