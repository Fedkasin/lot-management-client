import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import actions from '../actions/index';
import CarLotCard from '../components/car/CarLotCard';
import BgMessage from '../components/bgmessage/BackgroundMessage';

class CarLotsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.handleScrollEnd = this.handleScrollEnd.bind(this);
  }

  componentDidMount() {
    const { onFetchCarLots, page, itemsPerPage } = this.props;
    onFetchCarLots(page, itemsPerPage);
  }

  handleScrollEnd() {
    const { onFetchCarLots, page, itemsPerPage } = this.props;
    onFetchCarLots(page + 1, itemsPerPage);
  }

  render() {
    const { carLots, isFetching } = this.props;
    if (!carLots.length) {
      return <BgMessage text="There are no cars" />;
    }
    return (
      <FlatList
        data={carLots}
        renderItem={({ item }) => <CarLotCard item={item} />}
        keyExtractor={item => item.id.toString()}
        onEndReached={this.handleScrollEnd}
        onEndReachedThreshold={1}
        refreshing={isFetching}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.carLotsReducers.isFetching,
    carLots: state.carLotsReducers.carLots,
    page: state.carLotsReducers.page,
    itemsPerPage: state.carLotsReducers.itemsPerPage,
    error: state.carLotsReducers.error ? state.carLotsReducers.error : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchCarLots: (page, itemsPerPage) => dispatch(actions.carLotsActions.fetchCarLots({ page, itemsPerPage })),
  };
}

CarLotsContainer.propTypes = {
  onFetchCarLots: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  carLots: PropTypes.arrayOf(PropTypes.any).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarLotsContainer);
