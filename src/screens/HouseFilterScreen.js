import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Localization } from 'expo';
import i18n from 'i18n-js';
import actions from '../store/actions';
import HouseFilterContainer from '../containers/HouseFilterContainer';
import TopbarActionButton from '../components/core/TopbarActionButton';
import * as Colors from '../constants/Colors';
import Locales from '../../assets/locales';

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

class HouseFilterScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: `${i18n.t('Houses Filter')}`,
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
    return <HouseFilterContainer />;
  }
}

function mapStateToProps(state) {
  return {
    filters: {
      priceTo: state.houseFilterReducers.priceTo,
      priceFrom: state.houseFilterReducers.priceFrom,
      roomFilters: state.houseFilterReducers.roomFilters,
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
