import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'expo';

function ButtonIcon({ name, color }) {
  return (
    <Icon.Ionicons
      name={name}
      color={color}
      size={26}
      style={{ marginBottom: -3 }}
    />
  );
}

ButtonIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ButtonIcon;
