import React from 'react';
import CarLotsContainer from '../containers/CarLotsContainer';
import TopBarButton from '../components/core/TopBarButton';
import { CAR_LOTS_FILTER_SCREEN } from '../constants/Routes';

class CarLotsScreen extends React.Component {
  static navigationOptions = {
    title: 'Cars',
    headerRight: (
      <TopBarButton
        iconColor="#131313"
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
