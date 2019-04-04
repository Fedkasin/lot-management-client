import React from 'react';
import HouseWatchFilterContainer from '../containers/HouseWatchFilterContainer';

class HouseWatchFilterScreen extends React.Component {
  static navigationOptions = {
    title: 'Live Houses Filter',
  };

  render() {
    return <HouseWatchFilterContainer />;
  }
}

export default HouseWatchFilterScreen;
