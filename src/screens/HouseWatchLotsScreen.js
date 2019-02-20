import React from 'react';
import HouseWatchLotsContainer from '../containers/HouseWatchLotsContainer';
import TopBarButton from '../components/core/TopBarButton';

class HouseWatchScreen extends React.Component {
    static navigationOptions = {
      title: 'Houses (Live)',
      headerRight: (
        <TopBarButton
          onPress={() => alert('This is a button!')}
          iconColor="#131313"
          iosIcon="ios-options"
          otherIcon="md-options"
        />
      ),
    };

    render() {
      return <HouseWatchLotsContainer />;
    }
}

export default HouseWatchScreen;
