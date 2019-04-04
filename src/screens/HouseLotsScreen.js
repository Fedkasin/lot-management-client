import React from 'react';
import HouseLotsContainer from '../containers/HouseLotsContainer';
import TopBarButton from '../components/core/TopBarButton';
import { HOUSE_FILTER_SCREEN } from '../constants/Routes';
import * as Colors from '../constants/Colors';

class HouseLotsScreen extends React.Component {
  static navigationOptions = {
    title: 'Houses',
    headerRight: (
      <TopBarButton
        iconColor={Colors.black}
        iosIcon="ios-options"
        otherIcon="md-options"
        routeName={HOUSE_FILTER_SCREEN}
      />
    ),
  };

  render() {
    return <HouseLotsContainer />;
  }
}

export default HouseLotsScreen;
