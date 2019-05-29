import React from 'react';
import t from '../helpers/i18helper';
import JobWatchLotsContainer from '../containers/JobWatchLotsContainer';
import * as Colors from '../constants/Colors';

class JobWatchLotsScreen extends React.PureComponent {
  static navigationOptions = {
    title: t('SEARCH_RESULTS'),
    headerStyle: {
      backgroundColor: Colors.silver,
    },
  };

  render() {
    return <JobWatchLotsContainer />;
  }
}

export default JobWatchLotsScreen;
