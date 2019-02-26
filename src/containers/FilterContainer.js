import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import SettingSectionItem from '../components/settings/SettingSectionItem';

class FilterContainer extends PureComponent {
  render() {
    const { navigation } = this.props;
    const filters = navigation.getParam('filters', 'null');
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
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withNavigation(FilterContainer);
