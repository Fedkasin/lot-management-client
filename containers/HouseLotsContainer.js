import React from 'react';
import  { connect } from 'react-redux';
import { FlatList } from 'react-native';

import actions from '../actions';
import HouseLotCard from "../components/house/HouseLotCard";
import BgMessage from "../components/bgmessage";

class HouseLotsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleRefresh = this.handleRefresh.bind(this);
        // this.handleScrollEnd = this.handleScrollEnd.bind(this);
    }

    componentDidMount() {
        this.props.onFetchHouseLots();
    }

    // handleScrollEnd() {
    //     this.props.onFetchHouseLots(this.props.page + 1, this.props.itemsPerPage);
    // }

    handleRefresh() {
        this.props.onFetchHouseLots();
    }

    render () {
        if (!this.props.houseLots.length) {
            return <BgMessage text = 'There is no houses'/>
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

function mapDispatchToProps(dispatch) {
    return {
        onFetchHouseLots: () => dispatch(actions.houseLotsActions.fetchHouseLots()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseLotsContainer);
