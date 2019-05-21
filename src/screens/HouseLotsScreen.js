import React from 'react';
import { Localization } from 'expo';
import i18n from 'i18n-js';
import HouseLotsContainer from '../containers/HouseLotsContainer';
import TopbarNavButton from '../components/core/TopbarNavButton';
import { HOUSE_FILTER_SCREEN } from '../constants/Routes';
import * as Colors from '../constants/Colors';
import Locales from '../../assets/locales';

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

class HouseLotsScreen extends React.PureComponent {
  static navigationOptions = {
    title: `${i18n.t('Houses')}`,
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
