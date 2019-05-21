import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, Text, StyleSheet, ActivityIndicator,
} from 'react-native';
import { Localization } from 'expo';
import i18n from 'i18n-js';
import IcoButton from '../core/IcoButton';
import * as Colors from '../../constants/Colors';
import Locales from '../../../assets/locales';

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '25%',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.lightGray,
  },
  name: {
    zIndex: 2,
    fontSize: 24,
    color: Colors.black,
    marginTop: 20,
  },
});

class ProfileView extends React.PureComponent {
  render() {
    const {
      profile, onClick, isLoading, isLogouting,
    } = this.props;
    const { displayName, photoURL } = profile;
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: photoURL }}
          style={styles.avatar}
        />
        <Text style={styles.name}>
          { displayName }
        </Text>
        { isLoading || isLogouting ? <ActivityIndicator size="large" color={Colors.lightGray} />
          : (
            <View style={{ width: 120 }}>
              <IcoButton
                text={i18n.t('LOG_OUT')}
                color={Colors.white}
                onPress={onClick}
                textColor={Colors.black}
                iconColor={Colors.black}
                iosIcon="ios-log-out"
                otherIcon="md-log-out"
              />
            </View>
          )
        }
      </View>

    );
  }
}

ProfileView.propTypes = {
  profile: PropTypes.objectOf(PropTypes.any).isRequired,
  isLogouting: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProfileView;
