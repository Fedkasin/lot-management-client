import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import actions from '../store/actions/index';
import HouseLotCard from '../components/house/HouseLotCard';
import BgMessage from '../components/bgmessage/BackgroundMessage';
import SortBar from '../components/house/SortBar';
import * as Colors from '../constants/Colors';
import * as Errors from '../constants/Errors';

const dataSelector = (state) => state.houseLotsReducers.houseLots;

const byDateSelector = createSelector(
  dataSelector,
  data => data
    .sort((a, b) => a.created_at.localeCompare(b.created_at))
    .reverse()
    .map(data => data)
);

const byLastTimeUpSelector = createSelector(
  dataSelector,
  data => data
    .sort((a, b) => a.last_time_up.localeCompare(b.last_time_up))
    .reverse()
    .map(data => data)
);

const byPriceLowSelector = createSelector(
  dataSelector,
  data => data
    .sort((a, b) => a.price.converted.USD.amount - b.price.converted.USD.amount)
    .map(data => data)
);

const priceHighSelector = createSelector(
  dataSelector,
  data => data
    .sort((a, b) => a.price.converted.USD.amount - b.price.converted.USD.amount)
    .reverse()
    .map(data => data)
);

class HouseLotsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.fetchHouses = this.fetchHouses.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses() {
    const { onFetchHouseLots, filters } = this.props;
    onFetchHouseLots(filters);
  }

  handleSort(value) {
    const {
      housesByDate, housesByLastTimeUp, housesByPriceLow, housesByPriceHigh, onSetSortHouseLots,
    } = this.props;
    switch (value) {
      case 0:
        onSetSortHouseLots(housesByDate);
        break;
      case 1:
        onSetSortHouseLots(housesByLastTimeUp);
        break;
      case 2:
        onSetSortHouseLots(housesByPriceHigh);
        break;
      case 3:
        onSetSortHouseLots(housesByPriceLow);
        break;
      default:
    }
    setTimeout(() => { this.flatListRef.scrollToIndex({ animated: true, index: 0 }); }, 10);
  }

  render() {
    const {
      isFetching, error, sortedItems,
    } = this.props;
    if (!sortedItems.length && isFetching) return <ActivityIndicator size="large" color={Colors.lightGray} />;
    return (
      <>
        <SortBar display={!!(sortedItems)} handler={this.handleSort} />
        <FlatList
          data={sortedItems}
          ref={(ref) => { this.flatListRef = ref; }}
          renderItem={({ item }) => <HouseLotCard item={item} />}
          keyExtractor={item => item.id.toString()}
          onRefresh={this.fetchHouses}
          onEndReached={this.handleScrollEnd}
          onEndReachedThreshold={0}
          refreshing={isFetching}
          ListEmptyComponent={() => <BgMessage text={error || Errors.notfound} />}
        />
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  isFetching: state.houseLotsReducers.isFetching,
  filters: state.houseFilterReducers,
  error: state.houseLotsReducers.error ? state.houseLotsReducers.error : null,
  housesByDate: byDateSelector(state, props),
  housesByLastTimeUp: byLastTimeUpSelector(state, props),
  housesByPriceLow: byPriceLowSelector(state, props),
  housesByPriceHigh: priceHighSelector(state, props),
  sortedItems: state.houseLotsReducers.sortedItems,
});

function mapDispatchToProps(dispatch) {
  return {
    onFetchHouseLots: filters => dispatch(actions.houseLotsActions.fetchHouseLots(filters)),
    onSetSortHouseLots: houseLotsSorted => dispatch(actions.houseLotsActions.setSortHouseLots(houseLotsSorted)),
  };
}

HouseLotsContainer.propTypes = {
  housesByDate: PropTypes.arrayOf(PropTypes.any).isRequired,
  housesByLastTimeUp: PropTypes.arrayOf(PropTypes.any).isRequired,
  housesByPriceLow: PropTypes.arrayOf(PropTypes.any).isRequired,
  housesByPriceHigh: PropTypes.arrayOf(PropTypes.any).isRequired,
  sortedItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  onFetchHouseLots: PropTypes.func.isRequired,
  onSetSortHouseLots: PropTypes.func.isRequired,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

HouseLotsContainer.defaultProps = {
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseLotsContainer);
