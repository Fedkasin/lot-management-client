import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { Localization } from 'expo';
import i18n from 'i18n-js';
import actions from '../store/actions/index';
import HouseLotCard from '../components/house/HouseLotCard';
import BgMessage from '../components/bgmessage/BackgroundMessage';
import HouseSorting from '../components/house/HouseSorting';
import * as Colors from '../constants/Colors';
import * as Errors from '../constants/Errors';
import Locales from '../../assets/locales';

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

class HouseLotsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.fetchHouses = this.fetchHouses.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses() {
    const { onFetchHouseLots, filters } = this.props;
    onFetchHouseLots(filters);
  }

  handleRefresh() {
    this.fetchHouses();
  }

  handleSort(value) {
    const { houseLots } = this.props;
    this.flatListRef.scrollToIndex({ animated: true, index: 0 });
    switch (value) {
      case 0:
        houseLots.sort((a, b) => a.created_at.localeCompare(b.created_at)).reverse();
        break;
      case 1:
        houseLots.sort((a, b) => a.last_time_up.localeCompare(b.last_time_up)).reverse();
        break;
      case 2:
        houseLots.sort((a, b) => a.price.converted.USD.amount.localeCompare(b.price.converted.USD.amount)).reverse();
        break;
      case 3:
        houseLots.sort((a, b) => a.price.converted.USD.amount.localeCompare(b.price.converted.USD.amount));
        break;
      default:
    }
    this.forceUpdate();
  }

  render() {
    const {
      houseLots, isFetching, error,
    } = this.props;
    if (!houseLots.length && isFetching) return <ActivityIndicator size="large" color={Colors.lightGray} />;
    return (
      <>
        <HouseSorting houseLots={houseLots} handler={this.handleSort} />
        <FlatList
          data={houseLots}
          ref={(ref) => { this.flatListRef = ref; }}
          renderItem={({ item }) => <HouseLotCard item={item} />}
          keyExtractor={item => item.id.toString()}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleScrollEnd}
          onEndReachedThreshold={0}
          refreshing={isFetching}
          ListEmptyComponent={() => <BgMessage text={error || Errors.notfound} />}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.houseLotsReducers.isFetching,
    houseLots: state.houseLotsReducers.houseLots,
    filters: state.houseFilterReducers,
    page: state.houseLotsReducers.page,
    itemsPerPage: state.houseLotsReducers.itemsPerPage,
    error: state.houseLotsReducers.error ? state.houseLotsReducers.error : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchHouseLots: filters => dispatch(actions.houseLotsActions.fetchHouseLots(filters)),
  };
}

HouseLotsContainer.propTypes = {
  onFetchHouseLots: PropTypes.func.isRequired,
  houseLots: PropTypes.arrayOf(PropTypes.any).isRequired,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

HouseLotsContainer.defaultProps = {
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseLotsContainer);
