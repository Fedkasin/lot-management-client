import React from 'react';
import HouseLotsContainer from '../containers/HouseLotsContainer';

class HouseLotsScreen extends React.Component {
    static navigationOptions = {
      title: 'Houses',
    };

    render() {
      return <HouseLotsContainer />;
    }
}

export default HouseLotsScreen;
