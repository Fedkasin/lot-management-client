import React from 'react';
import { Localization } from 'expo';
import i18n from 'i18n-js';
import CarLotsContainer from '../containers/CarLotsContainer';
import TopbarNavButton from '../components/core/TopbarNavButton';
import { CAR_LOTS_FILTER_SCREEN } from '../constants/Routes';
import * as Colors from '../constants/Colors';
import Locales from '../../assets/locales';

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

class CarLotsScreen extends React.PureComponent {
  static navigationOptions = {
    title: `${i18n.t('CARS')}`,
    headerRight: (
      <TopbarNavButton
        iconColor={Colors.black}
        iosIcon="ios-options"
        otherIcon="md-options"
        routeName={CAR_LOTS_FILTER_SCREEN}
      />
    ),
  };

  render() {
    return <CarLotsContainer />;
  }
}

export default CarLotsScreen;
