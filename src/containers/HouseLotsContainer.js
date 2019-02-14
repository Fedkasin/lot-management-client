import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import actions from '../actions/index';
import HouseLotCard from '../components/house/HouseLotCard';
import BgMessage from '../components/bgmessage/BackgroundMessage';

class HouseLotsContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.handleRefresh = this.handleRefresh.bind(this);
    // this.handleScrollEnd = this.handleScrollEnd.bind(this);
  }

  componentDidMount() {
    const { onFetchHouseLots } = this.props;
    onFetchHouseLots();
  }

  // handleScrollEnd() {
  //     this.props.onFetchHouseLots(this.props.page + 1, this.props.itemsPerPage);
  // }

  handleRefresh() {
    const { onFetchHouseLots } = this.props;
    onFetchHouseLots();
  }

  render() {
    const { houseLots, isFetching } = this.props;
    if (!houseLots.length) {
      return <BgMessage text="There are no houses" />;
    }
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

function mapDispatchToProps(dispatch) {
  return {
    onFetchHouseLots: () => dispatch(actions.houseLotsActions.fetchHouseLots()),
  };
}

HouseLotsContainer.propTypes = {
  onFetchHouseLots: PropTypes.func.isRequired,
  houseLots: PropTypes.arrayOf(PropTypes.any).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseLotsContainer);
