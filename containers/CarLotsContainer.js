import React from 'react';
import  { connect } from 'react-redux';
import { FlatList } from 'react-native';

import actions from '../actions';
import CarLotCard from '../components/car/CarLotCard';
import BgMessage from "../components/bgmessage";

class CarLotsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleScrollEnd = this.handleScrollEnd.bind(this);
    }

    componentDidMount() {
        this.props.onFetchCarLots(this.props.page, this.props.itemsPerPage);
    }

    handleScrollEnd() {
        this.props.onFetchCarLots(this.props.page + 1, this.props.itemsPerPage);
    }

    render () {
        if (!this.props.carLots.length) {
            return <BgMessage text = 'There is no cars'/>
        }
        return (
            <FlatList
                data={this.props.carLots}
                renderItem={({item}) => <CarLotCard item={item}></CarLotCard>}
                keyExtractor={item => item.id.toString()}
                onEndReached={this.handleScrollEnd}
                onEndReachedThreshold={1}
                refreshing={this.props.isFetching}
                >
            </FlatList>
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchCarLots: (page, itemsPerPage) => dispatch(actions.carLotsActions.fetchCarLots({ page, itemsPerPage })),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarLotsContainer);
