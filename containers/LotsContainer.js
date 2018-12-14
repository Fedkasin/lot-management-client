import React from 'react';
import  { connect } from 'react-redux';
import { FlatList } from 'react-native';

import LotItem from '../components/LotItem';
import actions from '../actions';

class LotsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleScrollEnd = this.handleScrollEnd.bind(this);
    }

    componentDidMount() {
        this.props.onFetchLots(this.props.page, this.props.itemsPerPage);
    }

    handleScrollEnd() {
        this.props.onFetchLots(this.props.page + 1, this.props.itemsPerPage);
    }

    render () {
        return (
            <FlatList
                data={this.props.lots}
                renderItem={({item}) => <LotItem item={item}></LotItem>}
                keyExtractor={item => item.id.toString()}
                onEndReached={this.handleScrollEnd}
                onEndReachedThreshold={0}
                refreshing={this.props.isFetching}
                >
            </FlatList>
        );
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.lotsReducers.isFetching,
        lots: state.lotsReducers.lots,
        page: state.lotsReducers.page,
        itemsPerPage: state.lotsReducers.itemsPerPage,
        error: state.lotsReducers.error ? state.lotsReducers.error : null,
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
        onFetchLots: (page, itemsPerPage) => dispatch(actions.lotsActions.fetchLots({ page, itemsPerPage })),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LotsContainer);