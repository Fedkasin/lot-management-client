import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import t from '../helpers/i18helper';
import actions from '../store/actions';
import TopbarActionButton from '../components/core/TopbarActionButton';
import HouseWatchFilterContainer from '../containers/HouseWatchFilterContainer';
import * as Colors from '../constants/Colors';

class HouseWatchFilterScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: t('CREATE_WATCHER'),
    headerRight: (
      <View style={{ flexDirection: 'row' }}>
        <TopbarActionButton
          iconColor={Colors.black}
          iosIcon="ios-checkmark"
          otherIcon="md-checkmark"
          onTap={navigation.getParam('handleClick')}
        />
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
    return <HouseWatchFilterContainer />;
  }
}

function mapStateToProps(state) {
  return {
    filters: {
      roomFilters: state.houseFilterLiveReducers.roomFilters,
      priceTo: state.houseFilterLiveReducers.priceTo,
      priceFrom: state.houseFilterLiveReducers.priceFrom,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    applyFilter: value => dispatch(actions.houseWatchLotsFilterActions.updateHouseWatchFilterApply(value)),
  };
}

HouseWatchFilterScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  applyFilter: PropTypes.func.isRequired,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseWatchFilterScreen);
