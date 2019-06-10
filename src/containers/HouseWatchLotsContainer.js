import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Alert, View, Text, Switch, StyleSheet, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import t from '../helpers/i18helper';
import actions from '../store/actions';
import BgMessage from '../components/bgmessage/BackgroundMessage';

import HouseJob from '../components/house/HouseJob';
import * as Colors from '../constants/Colors';
import * as Errors from '../constants/Errors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
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
  mainView: {
    flexDirection: 'column',
    marginBottom: 50,
  },
  switchContainer: {
    flexDirection: 'row',
    padding: 9,
  },
  sectionLabel: {
    fontSize: 24,
    color: Colors.gray,
    marginLeft: 9,
  },
});

class HouseWatchLotsContainer extends PureComponent {
  componentDidMount() {
    const { onCheckHouseWatchState } = this.props;
    onCheckHouseWatchState();
  }

  onCloseJob(value) {
    const { removeJob } = this.props;
    Alert.alert(
      t('REMOVE_TASK'),
      t('YOU_SURE'),
      [
        {
          text: t('CANCEL'),
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
    const { state } = value || { value: [] };
    if (state === 'RUNNING') {
      pauseJob(value.id);
    } else {
      resumeJob(value.id);
    }
  }

  onPauseAllJobs(value) {
    const { onPauseAllJobs } = this.props;
    onPauseAllJobs(value);
  }

  render() {
    const {
      isFetching,
      isWatching,
      isAnyPaused,
      jobs,
      isEditing,
      error,
      onCheckHouseWatchState,
    } = this.props;
    return (
      <View style={styles.mainView}>
        <View style={[styles.switchContainer, { display: isWatching ? 'flex' : 'none' }]}>
          <Text style={styles.sectionLabel}>{t('LIVE_TRACKING')}</Text>
          <Switch
            value={isAnyPaused}
            disabled={isFetching}
            style={{ marginLeft: 'auto' }}
            onValueChange={() => this.onPauseAllJobs(isAnyPaused)}
          />
        </View>
        <FlatList
          data={jobs}
          renderItem={({ item, index }) => (
            <HouseJob
              key={`job-${index + 1}`}
              index={index + 1}
              item={item}
              iosIcon={item.state === 'RUNNING' ? 'ios-pause' : 'ios-play'}
              otherIcon={item.state === 'RUNNING' ? 'md-pause' : 'md-play'}
              onPlayPause={() => this.onPlayPauseJob({ id: item.jobId, state: item.state })}
              onClose={() => this.onCloseJob(item.jobId)}
              isEditing={isEditing}
            />
          )}
          keyExtractor={jobId => JSON.stringify(jobId)}
          onRefresh={onCheckHouseWatchState}
          onEndReachedThreshold={0}
          refreshing={isFetching}
          ListEmptyComponent={() => <BgMessage text={error || Errors.notfound} />}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.houseWatchLotsReducers.isFetching,
    isWatching: state.houseWatchLotsReducers.isWatching,
    isEditing: state.houseWatchLotsReducers.isEditing,
    isAnyPaused: state.houseWatchLotsReducers.isAnyPaused,
    houseWatchLots: state.houseWatchLotsReducers.houseWatchLots,
    page: state.houseWatchLotsReducers.page,
    itemsPerPage: state.houseWatchLotsReducers.itemsPerPage,
    error: state.houseWatchLotsReducers.error ? state.houseWatchLotsReducers.error : null,
    jobs: state.houseWatchLotsReducers.houseWatchJobs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPauseAllJobs: value => dispatch(actions.houseWatchLotsActions.pauseAllJobs(value)),
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
  isAnyPaused: PropTypes.bool.isRequired,
  jobs: PropTypes.arrayOf(PropTypes.any).isRequired,
  onPauseAllJobs: PropTypes.func.isRequired,
  onCheckHouseWatchState: PropTypes.func.isRequired,
  removeJob: PropTypes.func.isRequired,
  pauseJob: PropTypes.func.isRequired,
  resumeJob: PropTypes.func.isRequired,
  error: PropTypes.string,
};

HouseWatchLotsContainer.defaultProps = {
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseWatchLotsContainer);
