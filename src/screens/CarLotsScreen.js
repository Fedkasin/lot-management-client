import React from 'react';
import CarLotsContainer from '../containers/CarLotsContainer';
import TopBarButton from '../components/core/TopBarButton';
import { CAR_LOTS_FILTER_SCREEN } from '../constants/Routes';
import * as Colors from '../constants/Colors';

class CarLotsScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Cars',
    headerRight: (
      <TopBarButton
        iconColor={Colors.black}
        iosIcon="ios-options"
        otherIcon="md-options"
        routeName={CAR_LOTS_FILTER_SCREEN}
      />
    ),
  };

  render() {
    return <CarLotsContainer />;
  }
}

export default CarLotsScreen;
