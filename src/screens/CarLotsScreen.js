import React from 'react';
import CarLotsContainer from '../containers/CarLotsContainer';

class CarLotsScreen extends React.Component {
  static navigationOptions = {
    title: 'Cars',
  };

  render() {
    return <CarLotsContainer />;
  }
}

export default CarLotsScreen;
