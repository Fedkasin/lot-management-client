import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';
import t from '../../helpers/i18helper';

class SelfUpdatingText extends React.PureComponent {
  componentDidMount() {
    this.interv = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interv);
  }

  render() {
    const { prefix, date, style } = this.props;
    return (
      <Text
        numberOfLines={1}
        size={26}
        style={style}
      >
        {t(prefix)}
        {' '}
        {moment(date).fromNow()}
      </Text>
    );
  }
}

SelfUpdatingText.propTypes = {
  prefix: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SelfUpdatingText;
