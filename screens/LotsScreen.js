import React from 'react';
import LotsContainer from '../containers/LotsContainer';

class LotsScreen extends React.Component {
  static navigationOptions = {
    title: 'Lots',
  };

  render() {
    return <LotsContainer></LotsContainer>
  }
}

export default LotsScreen;
