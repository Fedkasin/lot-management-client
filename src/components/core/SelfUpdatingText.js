import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Localization } from 'expo';
import moment from 'moment';
import 'moment/locale/ru';
import i18n from 'i18n-js';
import Locales from '../../../assets/locales';

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

moment.locale(i18n.currentLocale());

class SelfUpdatingText extends React.PureComponent {
  componentWillMount() {
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
        {i18n.t(prefix)}
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
