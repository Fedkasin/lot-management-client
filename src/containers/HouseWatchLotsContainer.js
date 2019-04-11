import React from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
  ActivityIndicator,
  View,
  Text,
  Switch,
} from 'react-native';
import PropTypes from 'prop-types';
import actions from '../store/actions';

import HouseLotCard from '../components/house/HouseLotCard';
import BgMessage from '../components/bgmessage/BackgroundMessage';
import * as Colors from '../constants/Colors';

class HouseWatchLotsContainer extends React.Component {
  render() {
    console.log('this.props', this.props);
    const {
      isFetching,
      houseWatchLots,
      isWatching,
      updateWatchState,
    } = this.props;
    if (!houseWatchLots.length && isFetching) return <ActivityIndicator size="large" color={Colors.lightGray} />;
    return (
      <View>
        <View style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
          <Text style={{ fontSize: 24 }}>Tracking</Text>
          <Switch
            value={isWatching}
            style={{ marginLeft: 'auto' }}
            onValueChange={updateWatchState}
          />
        </View>
        <FlatList
          style={{ marginBottom: 30 }}
          data={houseWatchLots}
          renderItem={({ item }) => <HouseLotCard item={item} />}
          keyExtractor={item => item.id.toString()}
          onEndReached={this.handleScrollEnd}
          onEndReachedThreshold={0}
          refreshing={isFetching}
          ListEmptyComponent={() => <BgMessage text="There are no new houses" />}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.houseLotsReducers.isFetching,
    isWatching: state.houseLotsReducers.isWatching,
    houseWatchLots: state.houseLotsReducers.houseWatchLots,
    page: state.houseLotsReducers.page,
    itemsPerPage: state.houseLotsReducers.itemsPerPage,
    error: state.houseLotsReducers.error ? state.houseLotsReducers.error : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateWatchState: value => dispatch(actions.houseLotsActions.updateWatchState(value)),
  };
}

HouseWatchLotsContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isWatching: PropTypes.bool.isRequired,
  houseWatchLots: PropTypes.arrayOf(PropTypes.any).isRequired,
  updateWatchState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseWatchLotsContainer);
