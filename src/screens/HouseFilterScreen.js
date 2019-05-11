import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import actions from '../store/actions';
import IonIcon from '../components/core/IonIcon';
import HouseFilterContainer from '../containers/HouseFilterContainer';
import * as Colors from '../constants/Colors';

class HouseFilterScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: 'Houses Filter',
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
            name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
            color={Colors.black}
          />
        </TouchableOpacity>
      </View>
    ),
  });

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({ handleClick: this.handleClick });
  }

  handleClick = () => {
    const { applyFilter, filters, navigation } = this.props;
    navigation.pop(null);
    applyFilter(filters);
  };

  render() {
    return <HouseFilterContainer />;
  }
}

function mapStateToProps(state) {
  return {
    filters: {
      priceTo: state.houseFilterReducers.priceTo,
      priceFrom: state.houseFilterReducers.priceFrom,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    applyFilter: filters => dispatch(actions.houseLotsActions.fetchHouseLots(filters)),
  };
}

HouseFilterScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  applyFilter: PropTypes.func.isRequired,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseFilterScreen);
