import React from 'react';
import { connect } from 'react-redux';
import {
  Alert,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  Switch,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import actions from '../store/actions';
import BgMessage from '../components/bgmessage/BackgroundMessage';

import HouseJob from '../components/house/HouseJob';
import * as Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    paddingHorizontal: 10,
    flex: 1,
  },
  job: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  divider: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
  },
});

class HouseWatchLotsContainer extends React.Component {
  componentDidMount() {
    const { onCheckHouseWatchState } = this.props;
    onCheckHouseWatchState();
  }

  onCloseJob(value) {
    const { removeJob } = this.props;
    Alert.alert(
      'Remove task',
      'Are you sure about that?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => removeJob(value),
        },
      ],
      { cancelable: false },
    );
  }

  onPlayPauseJob(value) {
    const { pauseJob, resumeJob } = this.props;
    if (value.state && value.state === 'RUNNING') {
      pauseJob(value.id);
    } else {
      resumeJob(value.id);
    }
  }

  onStopAllJobs() {
    const { onUpdateHouseWatchState } = this.props;
    Alert.alert(
      'Remove all tasks',
      'Are you sure about that?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => onUpdateHouseWatchState(),
        },
      ],
      { cancelable: false },
    );
  }

  render() {
    const {
      isFetching,
      houseWatchLots,
      isWatching,
      jobs,
      isEditing,
    } = this.props;
    if (!houseWatchLots.length && isFetching) return <ActivityIndicator size="large" color={Colors.lightGray} />;
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
          <Text style={{ fontSize: 24, color: Colors.gray, marginLeft: 9 }}>Live tracking</Text>
          <Switch
            value={isWatching}
            disabled={!isWatching}
            style={{ marginLeft: 'auto' }}
            onValueChange={() => this.onStopAllJobs()}
          />
        </View>
        <ScrollView style={{ backgroundColor: Colors.white, marginBottom: 50 }}>
          <View style={styles.container}>
            { (jobs && jobs.length) ? jobs.map((value, index) => (
              <HouseJob
                key={`job-${index + 1}`}
                index={index + 1}
                item={value}
                iosIcon={value.state === 'RUNNING' ? 'ios-pause' : 'ios-play'}
                otherIcon={value.state === 'RUNNING' ? 'md-pause' : 'md-play'}
                onPlayPause={() => this.onPlayPauseJob({ id: value.jobId, state: value.state })}
                onClose={() => this.onCloseJob(value.jobId)}
                isEditing={isEditing}
              />
            )) : <BgMessage text="There are no trackers" />}
          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.houseWatchLotsReducers.isFetching,
    isWatching: state.houseWatchLotsReducers.isWatching,
    isEditing: state.houseWatchLotsReducers.isEditing,
    houseWatchLots: state.houseWatchLotsReducers.houseWatchLots,
    page: state.houseWatchLotsReducers.page,
    itemsPerPage: state.houseWatchLotsReducers.itemsPerPage,
    error: state.houseWatchLotsReducers.error ? state.houseWatchLotsReducers.error : null,
    jobs: state.houseWatchLotsReducers.houseWatchJobs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateHouseWatchState: value => dispatch(actions.houseWatchLotsActions.watchHouseLots(value)),
    onCheckHouseWatchState: value => dispatch(actions.houseWatchLotsActions.checkWatchHouseLotsState(value)),
    removeJob: value => dispatch(actions.houseWatchLotsActions.removeHouseWatchJob(value)),
    pauseJob: value => dispatch(actions.houseWatchLotsActions.pauseHouseWatchJob(value)),
    resumeJob: value => dispatch(actions.houseWatchLotsActions.resumeHouseWatchJob(value)),
  };
}

HouseWatchLotsContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isWatching: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  houseWatchLots: PropTypes.arrayOf(PropTypes.any).isRequired,
  jobs: PropTypes.arrayOf(PropTypes.any).isRequired,
  onUpdateHouseWatchState: PropTypes.func.isRequired,
  onCheckHouseWatchState: PropTypes.func.isRequired,
  removeJob: PropTypes.func.isRequired,
  pauseJob: PropTypes.func.isRequired,
  resumeJob: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseWatchLotsContainer);
