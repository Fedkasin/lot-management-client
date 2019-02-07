import React from 'react';
import  { connect } from 'react-redux';
import { FlatList } from 'react-native';

import actions from '../actions/index';
import HouseLotCard from "../components/house/HouseLotCard";
import BgMessage from "../components/bgmessage";

class HouseWatchLotsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        if (!this.props.houseLots.length) {
            return <BgMessage text = 'There is no new houses'/>
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
