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
        parentScreen={this.className}
      />
    ),
  };

  render() {
    return <HouseLotsContainer />;
  }
}

export default HouseLotsScreen;
