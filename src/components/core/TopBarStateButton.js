import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import {
  StyleSheet, TouchableOpacity, Platform,
} from 'react-native';
import IonIcon from './IonIcon';

class TopBarStateButton extends React.PureComponent {
  render() {
    const {
      iconColor, iosIcon, otherIcon, onTap, isWatching,
    } = this.props;
    const styles = StyleSheet.create({
      button: {
        width: 40,
        height: 40,
        marginRight: 9,
        justifyContent: 'center',
        alignItems: 'center',
        display: isWatching ? 'flex' : 'none',
      },
    });
    return (
      <TouchableOpacity
        onPress={onTap()}
        style={styles.button}
      >
        <IonIcon
          name={Platform.OS === 'ios' ? iosIcon : otherIcon}
          color={iconColor}
        />
      </TouchableOpacity>
    );
  }
}

TopBarStateButton.propTypes = {
  iconColor: PropTypes.string.isRequired,
  iosIcon: PropTypes.string.isRequired,
  otherIcon: PropTypes.string.isRequired,
  onTap: PropTypes.func.isRequired,
  isWatching: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isWatching: state.houseWatchLotsReducers.isWatching,
  };
}

export default connect(mapStateToProps)(withNavigation(TopBarStateButton));
