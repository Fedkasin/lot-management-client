import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, Text, StyleSheet, ActivityIndicator,
} from 'react-native';
import IcoButton from '../core/IcoButton';
import * as Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  shadow: {
    width: 110,
    height: 110,
    zIndex: 2,
    borderRadius: 200,
    marginTop: -150,
  },
});

class ProfileView extends React.PureComponent {
  render() {
    const {
      profile, onClick, isLoading, isLogouting,
    } = this.props;
    const { displayName, photoURL } = profile;
    return (
      <View style={{ alignItems: 'center', marginTop: -550, marginBottom: 110 }}>
        <View
          style={{
            zIndex: 0, width: '200%', height: 800, backgroundColor: Colors.white, borderRadius: 100000,
          }}
        />
        <Text style={{
          zIndex: 2, fontSize: 24, color: Colors.black, marginTop: -95,
        }}
        >
          { displayName }
        </Text>
        { isLoading || isLogouting ? <ActivityIndicator size="large" color={Colors.lightGray} />
          : (
            <View style={{ width: 120 }}>
              <IcoButton
                text="Log out"
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
        <View style={styles.shadow}>
          <Image
            source={{ uri: photoURL }}
            style={{
              width: 100, height: 100, borderRadius: 50, backgroundColor: Colors.lightGray, marginTop: -60,
            }}
          />
        </View>
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
