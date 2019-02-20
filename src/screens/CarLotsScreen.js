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
      />
    ),
  };

  render() {
    return <CarLotsContainer />;
  }
}

export default CarLotsScreen;
