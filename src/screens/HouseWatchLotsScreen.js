import React from 'react';
import HouseWatchLotsContainer from '../containers/HouseWatchLotsContainer';

class HouseWatchScreen extends React.Component {
    static navigationOptions = {
      title: 'Houses (Live)',
    };

    render() {
      return <HouseWatchLotsContainer />;
    }
}

export default HouseWatchScreen;
