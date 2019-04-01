import React from 'react';
import HouseWatchLotsContainer from '../containers/HouseWatchLotsContainer';
import TopBarButton from '../components/core/TopBarButton';
import { HOUSE_WATCH_FILTER_SCREEN } from '../constants/Routes';

class HouseWatchScreen extends React.Component {
    static navigationOptions = {
      title: 'Houses (Live)',
      headerRight: (
        <TopBarButton
          iconColor="#131313"
          iosIcon="ios-options"
          otherIcon="md-options"
          routeName={HOUSE_WATCH_FILTER_SCREEN}
        />
      ),
    };

    render() {
      return <HouseWatchLotsContainer />;
    }
}

export default HouseWatchScreen;
