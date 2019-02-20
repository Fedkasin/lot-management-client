import React from 'react';
import HouseLotsContainer from '../containers/HouseLotsContainer';
import TopBarButton from '../components/core/TopBarButton';

class HouseLotsScreen extends React.Component {
  static navigationOptions = {
    title: 'Houses',
    headerRight: (
      <TopBarButton
        iconColor="#131313"
        iosIcon="ios-options"
        otherIcon="md-options"
      />
    ),
  };

  render() {
    return <HouseLotsContainer />;
  }
}

export default HouseLotsScreen;
