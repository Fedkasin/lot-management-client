import React from 'react';
import HouseLotsContainer from '../containers/HouseLotsContainer';
import TopbarNavButton from '../components/core/TopbarNavButton';
import { HOUSE_FILTER_SCREEN } from '../constants/Routes';
import * as Colors from '../constants/Colors';

class HouseLotsScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Houses',
    headerRight: (
      <TopbarNavButton
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
