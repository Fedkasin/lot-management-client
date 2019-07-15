import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ScrollView, View, ActivityIndicator, Text, Switch, StyleSheet,
} from 'react-native';

import actions from '../store/actions/index';
import ProfileView from '../components/auth/ProfileView';
import * as Colors from '../constants/Colors';

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    padding: 9,
  },
});

class ProfileContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchProfile } = this.props;
    fetchProfile();
  }

  handleClick() {
    const { onSignOut } = this.props;
    onSignOut();
  }

  handleGlobalPushSwitch() {
    const { onGlobalPushStatusChange, isGlobalNotifyGranted } = this.props;
    onGlobalPushStatusChange(!isGlobalNotifyGranted);
  }

  handleLocalPushSwitch() {
    const { onLocalPushStatusChange, isLocalNotifyGranted } = this.props;
    onLocalPushStatusChange(!isLocalNotifyGranted);
  }

  render() {
    const {
      isLoading, profile, isLogouting, isDeviceReal, isGlobalNotifyGranted, isLocalNotifyGranted,
    } = this.props;
    console.log('<< isGlobalNotifyGranted', isGlobalNotifyGranted);
    console.log('<< isLocalNotifyGranted', isLocalNotifyGranted);
    if (!profile) return <ActivityIndicator size="large" color={Colors.lightGray} />;

    return (
      <ScrollView>
        <ProfileView
          isLoading={isLoading}
          isLogouting={isLogouting}
          profile={profile}
          onClick={this.handleClick}
        />
        <View style={{ marginTop: 15 }}>
          <Text style={{ margin: 12, fontSize: 21 }}>Notifications</Text>
          <View style={styles.switchContainer}>
            <Text style={{ margin: 9, fontSize: 16 }}>Notifications at all devices</Text>
            <Switch
              value={isGlobalNotifyGranted}
              disabled={!(isDeviceReal)}
              style={{ marginLeft: 'auto' }}
              onValueChange={() => this.handleGlobalPushSwitch()}
            />
          </View>
          <View style={styles.switchContainer}>
            <Text style={{ margin: 9, fontSize: 16 }}>Notifications at this device</Text>
            <Switch
              value={isLocalNotifyGranted}
              disabled={!(isDeviceReal)}
              style={{ marginLeft: 'auto' }}
              onValueChange={() => this.handleLocalPushSwitch()}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogouting: state.authReducers.isLoading,
    isLoading: state.profileReducers.isLoading,
    profile: state.profileReducers.profile,
    isDeviceReal: state.profileReducers.isDeviceReal,
    isGlobalNotifyGranted: state.profileReducers.isGlobalNotifyGranted,
    isLocalNotifyGranted: state.profileReducers.isLocalNotifyGranted,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProfile: () => dispatch(actions.profileActions.fetchProfile()),
    onSignOut: () => dispatch(actions.authActions.logout()),
    onGlobalPushStatusChange: status => dispatch(actions.profileActions.setGlobalNotifyStatus(status)),
    onLocalPushStatusChange: status => dispatch(actions.profileActions.setLocalNotifyStatus(status)),
  };
}

ProfileContainer.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  onGlobalPushStatusChange: PropTypes.func.isRequired,
  onLocalPushStatusChange: PropTypes.func.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  isLogouting: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  profile: PropTypes.objectOf(PropTypes.any),
  isDeviceReal: PropTypes.bool.isRequired,
  isGlobalNotifyGranted: PropTypes.bool.isRequired,
  isLocalNotifyGranted: PropTypes.bool.isRequired,
};

ProfileContainer.defaultProps = {
  profile: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
