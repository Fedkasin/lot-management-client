import React from 'react';
import  { connect } from 'react-redux';
import { FlatList, Text } from 'react-native';

import actions from '../actions';
import HouseLotCard from "../components/house/HouseLotCard";

class HouseWatchLotsContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render () {
        if (!this.props.houseLots.length) {
            return <Text>No new houses</Text>
        }
        return (
            <FlatList
                data={this.props.houseLots}
                renderItem={({item}) => <HouseLotCard item={item}></HouseLotCard>}
                keyExtractor={item => item.id.toString()}
                onRefresh={this.handleRefresh}
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
        isFetching: state.houseLotsReducers.isFetching,
        houseLots: state.houseLotsReducers.houseLots,
        page: state.houseLotsReducers.page,
        itemsPerPage: state.houseLotsReducers.itemsPerPage,
        error: state.houseLotsReducers.error ? state.houseLotsReducers.error : null,
    }
}

export default connect(mapStateToProps)(HouseWatchLotsContainer);
