import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import actions from '../store/actions';
import HouseWatchLotsContainer from '../containers/HouseWatchLotsContainer';
import TopBarButton from '../components/core/TopBarButton';
import IonIcon from '../components/core/IonIcon';
import { HOUSE_WATCH_FILTER_SCREEN } from '../constants/Routes';
import * as Colors from '../constants/Colors';

class HouseWatchScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Houses (Live)',
    headerRight: (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={navigation.getParam('handleClick')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            height: 40,
            width: 40,
            backgroundColor: Colors.white,
            marginRight: 5,
            zIndex: 1,
          }}
        >
          <IonIcon
            name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'}
            color={Colors.black}
          />
        </TouchableOpacity>
        <TopBarButton
          iconColor={Colors.black}
          iosIcon="ios-add"
          otherIcon="md-add"
          routeName={HOUSE_WATCH_FILTER_SCREEN}
        />
      </View>
    ),
  });

  componentDidMount() {
    this.props.navigation.setParams({ handleClick: this.handleClick });
  }

  handleClick = () => {
    console.log('ed', this.props.isEditing);
  };

  render() {
    return <HouseWatchLotsContainer />;
  }
}

function mapStateToProps(state) {
  return {
    isEditing: state.houseWatchLotsReducers.isEditing,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateHouseWatchState: value => dispatch(actions.houseWatchLotsActions.watchHouseLots(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseWatchScreen);
