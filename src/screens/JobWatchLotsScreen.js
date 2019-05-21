import React from 'react';
import { Localization } from 'expo';
import i18n from 'i18n-js';
import JobWatchLotsContainer from '../containers/JobWatchLotsContainer';
import Locales from '../../assets/locales';

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

class JobWatchLotsScreen extends React.PureComponent {
  static navigationOptions = {
    title: `${i18n.t('SEARCH_RESULTS')}`,
  };

  render() {
    return <JobWatchLotsContainer />;
  }
}

export default JobWatchLotsScreen;
