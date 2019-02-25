import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import SettingSectionItem from '../components/settings/SettingSectionItem';

class FilterContainer extends PureComponent {
  render() {
    const { filters } = this.props;
    return (
      <ScrollView style={{ backgroundColor: '#fff' }}>
        {filters.map((value, key) => (
          <SettingSectionItem
            key={value.id}
            sectionIndex={key}
            setting={value}
          />
        ))}
      </ScrollView>
    );
  }
}

FilterContainer.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.any).isRequired,
};

function mapStateToProps(state) {
  return {
    filters: state.carLotsReducers.filters,
  };
}

export default connect(mapStateToProps)(withNavigation(FilterContainer));
