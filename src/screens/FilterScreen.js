import React from 'react';
import FilterContainer from '../containers/FilterContainer';

class FilterScreen extends React.Component {
  static navigationOptions = {
    title: 'Filter',
  };

  render() {
    return <FilterContainer />;
  }
}

export default FilterScreen;
