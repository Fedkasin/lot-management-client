import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Localization } from 'expo';
import i18n from 'i18n-js';
import actions from '../store/actions';
import HouseWatchLotsContainer from '../containers/HouseWatchLotsContainer';
import TopbarNavButton from '../components/core/TopbarNavButton';
import TopBarStateButton from '../components/core/TopBarStateButton';
import { HOUSE_WATCH_FILTER_SCREEN } from '../constants/Routes';
import * as Colors from '../constants/Colors';
import Locales from '../../assets/locales';

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

class HouseWatchScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: `${i18n.t('HOUSES_LIVE')}`,
    headerRight: (
      <View style={{ flexDirection: 'row' }}>
        <TopBarStateButton
          iconColor={Colors.black}
          iosIcon="ios-create"
          otherIcon="md-create"
          onTap={() => navigation.getParam('handleClick')}
        />
        <TopbarNavButton
          iconColor={Colors.black}
          iosIcon="ios-add"
          otherIcon="md-add"
          routeName={HOUSE_WATCH_FILTER_SCREEN}
        />
      </View>
    ),
  });

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({ handleClick: this.handleClick });
  }

  handleClick = () => {
    const { onEditWatch } = this.props;
    onEditWatch();
  };

  render() {
    return <HouseWatchLotsContainer />;
  }
}

HouseWatchScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  onEditWatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isEditing: state.houseWatchLotsReducers.isEditing,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onEditWatch: () => dispatch(actions.houseWatchLotsActions.editHouseWatchJobList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseWatchScreen);
