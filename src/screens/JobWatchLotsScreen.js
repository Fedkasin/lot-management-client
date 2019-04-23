import React from 'react';
import JobWatchLotsContainer from '../containers/JobWatchLotsContainer';

class JobWatchLotsScreen extends React.Component {
  static navigationOptions = {
    title: 'Search results',
  };

  render() {
    return <JobWatchLotsContainer />;
  }
}

export default JobWatchLotsScreen;
