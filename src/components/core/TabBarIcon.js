import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';

function TabBarIcon({ name, focused }) {
  return (
    <Icon.Ionicons
      name={name}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? 'blue' : 'gray'}
    />
  );
}

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

export default TabBarIcon;
