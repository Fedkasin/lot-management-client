import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import actions from '../store/actions';

import HouseLotCard from '../components/house/HouseLotCard';
import BgMessage from '../components/bgmessage/BackgroundMessage';
import * as Errors from '../constants/Errors';

class JobWatchLotsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.fetchItems = this.fetchItems.bind(this);
  }

  fetchItems() {
    const { onUpdateItems, jobId } = this.props;
    onUpdateItems(jobId);
  }

  render() {
    const {
      isFetching,
      houseWatchLots,
      error,
    } = this.props;

    return (
      <FlatList
        data={houseWatchLots}
        renderItem={({ item }) => <HouseLotCard item={item} />}
        keyExtractor={item => item.id.toString()}
        onEndReached={this.handleScrollEnd}
        onRefresh={this.fetchItems}
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
    jobId: state.houseWatchLotsReducers.jobId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateItems: jobId => dispatch(actions.houseWatchLotsActions.updateHouseWatchLots(jobId)),
  };
}

JobWatchLotsContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  houseWatchLots: PropTypes.arrayOf(PropTypes.any).isRequired,
  error: PropTypes.string,
  jobId: PropTypes.string.isRequired,
  onUpdateItems: PropTypes.func.isRequired,
};

JobWatchLotsContainer.defaultProps = {
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(JobWatchLotsContainer);
