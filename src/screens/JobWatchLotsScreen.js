import React from 'react';
import t from '../helpers/i18helper';
import JobWatchLotsContainer from '../containers/JobWatchLotsContainer';

class JobWatchLotsScreen extends React.PureComponent {
  static navigationOptions = {
    title: t('SEARCH_RESULTS'),
  };

  render() {
    return <JobWatchLotsContainer />;
  }
}

export default JobWatchLotsScreen;
