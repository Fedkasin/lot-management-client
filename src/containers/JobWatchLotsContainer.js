import React from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import actions from '../store/actions';

import HouseLotCard from '../components/house/HouseLotCard';
import BgMessage from '../components/bgmessage/BackgroundMessage';
import * as Colors from '../constants/Colors';

class JobWatchLotsContainer extends React.Component {
  componentDidMount() {
    const { onCheckHouseWatchState } = this.props;
    onCheckHouseWatchState();
  }

  render() {
    const {
      isFetching,
      houseWatchLots,
    } = this.props;
    if (!houseWatchLots.length && isFetching) return <ActivityIndicator size="large" color={Colors.lightGray} />;
    return (
      <FlatList
        style={{ marginBottom: 30 }}
        data={houseWatchLots}
        renderItem={({ item }) => <HouseLotCard item={item} />}
        keyExtractor={item => item.id.toString()}
        onEndReached={this.handleScrollEnd}
        onEndReachedThreshold={0}
        refreshing={isFetching}
        ListEmptyComponent={() => <BgMessage text="There are no matches" />}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.houseWatchLotsReducers.isFetching,
    isWatching: state.houseWatchLotsReducers.isWatching,
    houseWatchLots: state.houseWatchLotsReducers.houseWatchLots,
    page: state.houseWatchLotsReducers.page,
    itemsPerPage: state.houseWatchLotsReducers.itemsPerPage,
    error: state.houseWatchLotsReducers.error ? state.houseWatchLotsReducers.error : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateHouseWatchState: value => dispatch(actions.houseWatchLotsActions.watchHouseLots(value)),
    onCheckHouseWatchState: value => dispatch(actions.houseWatchLotsActions.checkWatchHouseLotsState(value)),
  };
}

JobWatchLotsContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  houseWatchLots: PropTypes.arrayOf(PropTypes.any).isRequired,
  onCheckHouseWatchState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobWatchLotsContainer);
