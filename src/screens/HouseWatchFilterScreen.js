import React from 'react';
import HouseWatchFilterContainer from '../containers/HouseWatchFilterContainer';

class HouseWatchFilterScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Create houses watcher',
  };

  render() {
    return <HouseWatchFilterContainer />;
  }
}

export default HouseWatchFilterScreen;
