import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

import HouseLotCard from '../components/house/HouseLotCard';
import BgMessage from '../components/bgmessage/BackgroundMessage';
import * as Colors from '../constants/Colors';

class JobWatchLotsContainer extends PureComponent {
  render() {
    const { isFetching, houseWatchLots, error } = this.props;
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
        ListEmptyComponent={() => <BgMessage text={error ? 'Server error: chech your internet connection' : 'There are no matches'} />}
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

JobWatchLotsContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  houseWatchLots: PropTypes.arrayOf(PropTypes.any).isRequired,
  error: PropTypes.objectOf(PropTypes.any),
};

JobWatchLotsContainer.defaultProps = {
  error: null,
};

export default connect(mapStateToProps)(JobWatchLotsContainer);
