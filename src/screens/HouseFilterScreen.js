import React from 'react';
import HouseFilterContainer from '../containers/HouseFilterContainer';

class HouseFilterScreen extends React.Component {
  static navigationOptions = {
    title: 'Houses Filter',
  };

  render() {
    return <HouseFilterContainer />;
  }
}

export default HouseFilterScreen;
