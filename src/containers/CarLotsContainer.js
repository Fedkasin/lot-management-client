import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FlatList, ActivityIndicator } from 'react-native';
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
    const {
      onFetchCarLots, page, itemsPerPage,
    } = this.props;
    const filtersMock = [
      {
        id: 'Model',
        label: 'Марка',
        children: {
          selects: {
            fromToSelects: [],
            nestedSelects: [
              {
                id: 'Mark',
                options: ['Все марки', 'Toyota', 'Audi', 'Mercedes', 'BMW', 'Honda', 'VAZ', 'Valve'],
                value: 'Все марки',
                label: '',
              },
              {
                id: 'PriceTo',
                options: ['Все модели', 'Модель1', 'Модель2', 'Модель3', 'Модель4', 'Модель5'],
                value: 'Все модели',
                label: '',
              },
            ],
            singleSelects: [],
          },
          buttons: [],
          checkboxes: [],
          inputs: [],
        },
      },
      {
        id: 'Price',
        label: 'Цена',
        children: {
          selects: {
            fromToSelects: [
              {
                id: 'PriceFrom',
                options: ['Любая', '1000', '2000', '3000', '4000', '5000', '10000'],
                value: 'Любая',
                label: 'От',
              },
              {
                id: 'PriceTo',
                options: ['Любая', '1000', '2000', '3000', '4000', '5000', '10000'],
                value: 'Любая',
                label: 'До',
              },
            ],
            nestedSelects: [],
            singleSelects: [],
          },
          buttons: [
            {
              id: 'Exchange',
              options: ['BYN', 'USD', 'EUR'],
              value: 'BYN',
              label: 'Валюта',
            },
          ],
          checkboxes: [
            {
              id: 'IsExchangeble',
              options: null,
              value: false,
              label: 'Обмен',
            },
            {
              id: 'WithDiagnostic',
              options: null,
              value: false,
              label: 'С диагностикой',
            },
          ],
          inputs: [],
        },
      },
      {
        id: 'Placeholder',
        label: 'Местонахождение',
        children: {
          selects: {
            fromToSelects: [],
            nestedSelects: [
              {
                id: 'Country',
                options: ['Все страны', 'Беларусь (жыве!)', 'Россия (слава руси!)', 'Украина (слава героям!)', 'Казахстан(уважайте)', 'США (fuck yeah!)'],
                value: 'Все страны',
                label: 'Страна',
              },
              {
                id: 'Region',
                options: ['Все области', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые'],
                value: 'Все области',
                label: 'Область',
              },
              {
                id: 'Town',
                options: ['Все области', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые'],
                value: 'Все области',
                label: 'Город',
              },
            ],
            singleSelects: [],
          },
          buttons: [],
          checkboxes: [],
          inputs: [],
        },
      },
    ];
    onFetchCarLots(page, itemsPerPage, filtersMock);
  }

  handleScrollEnd() {
    const { onFetchCarLots, page, itemsPerPage } = this.props;
    onFetchCarLots(page + 1, itemsPerPage);
  }

  render() {
    const { carLots, isFetching } = this.props;
    if (!carLots.length && isFetching) return <ActivityIndicator size="large" color="#0000ff" />;
    if (!carLots.length && !isFetching) return <BgMessage text="There is no cars" />;
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
    onFetchCarLots: (page, itemsPerPage, filtersMock) => dispatch(actions.carLotsActions.fetchCarLots({ page, itemsPerPage, filtersMock })),
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
