import React from 'react';
import { connect } from 'react-redux';
import { FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import HouseLotCard from '../components/house/HouseLotCard';
import BgMessage from '../components/bgmessage/BackgroundMessage';

class HouseWatchLotsContainer extends React.Component {
  render() {
    const { isFetching, houseLots } = this.props;
    if (!houseLots.length && isFetching) return <ActivityIndicator size="large" color="#0000ff" />;
    if (!houseLots.length && !isFetching) return <BgMessage text="There are no new houses" />;
    return (
      <FlatList
        data={houseLots}
        renderItem={({ item }) => <HouseLotCard item={item} />}
        keyExtractor={item => item.id.toString()}
        onRefresh={this.handleRefresh}
        onEndReached={this.handleScrollEnd}
        onEndReachedThreshold={0}
        refreshing={isFetching}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.houseLotsReducers.isFetching,
    houseLots: state.houseLotsReducers.houseLots,
    page: state.houseLotsReducers.page,
    itemsPerPage: state.houseLotsReducers.itemsPerPage,
    error: state.houseLotsReducers.error ? state.houseLotsReducers.error : null,
  };
}

HouseWatchLotsContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  houseLots: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(HouseWatchLotsContainer);
