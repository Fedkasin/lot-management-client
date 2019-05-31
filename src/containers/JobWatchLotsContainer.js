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
import * as Errors from '../constants/Errors';

class JobWatchLotsContainer extends PureComponent {
  render() {
    const { isFetching, houseWatchLots, error } = this.props;
    if (!houseWatchLots.length && isFetching) return <ActivityIndicator size="large" color={Colors.lightGray} />;
    return (
      <FlatList
        data={houseWatchLots}
        renderItem={({ item }) => <HouseLotCard item={item} />}
        keyExtractor={item => item.id.toString()}
        onEndReached={this.handleScrollEnd}
        onEndReachedThreshold={0}
        refreshing={isFetching}
        ListEmptyComponent={() => <BgMessage text={error || Errors.notfound} />}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.houseWatchLotsReducers.isFetching,
    houseWatchLots: state.houseWatchLotsReducers.houseWatchLots,
    error: state.houseWatchLotsReducers.error ? state.houseWatchLotsReducers.error : null,
  };
}

JobWatchLotsContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  houseWatchLots: PropTypes.arrayOf(PropTypes.any).isRequired,
  error: PropTypes.string,
};

JobWatchLotsContainer.defaultProps = {
  error: '',
};

export default connect(mapStateToProps)(JobWatchLotsContainer);
