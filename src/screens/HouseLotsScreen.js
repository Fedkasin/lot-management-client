import React from 'react';
import t from '../helpers/i18helper';
import HouseLotsContainer from '../containers/HouseLotsContainer';
import TopbarNavButton from '../components/core/TopbarNavButton';
import { HOUSE_FILTER_SCREEN } from '../constants/Routes';
import * as Colors from '../constants/Colors';

class HouseLotsScreen extends React.PureComponent {
  static navigationOptions = {
    title: t('HOUSES'),
    headerRight: (
      <TopbarNavButton
        iconColor={Colors.black}
        iosIcon="ios-options"
        otherIcon="md-options"
        routeName={HOUSE_FILTER_SCREEN}
      />
    ),
    headerStyle: {
      backgroundColor: Colors.silver,
    },
  };

  render() {
    return <HouseLotsContainer />;
  }
}

export default HouseLotsScreen;
