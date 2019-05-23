import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  FlatList, ActivityIndicator, StyleSheet, View, Text, Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import { Localization, Icon } from 'expo';
import i18n from 'i18n-js';
import actions from '../store/actions/index';
import HouseLotCard from '../components/house/HouseLotCard';
import BgMessage from '../components/bgmessage/BackgroundMessage';
import IcoButton from '../components/core/IcoButton';
import * as Colors from '../constants/Colors';
import * as Errors from '../constants/Errors';
import Locales from '../../assets/locales';

const styles = StyleSheet.create({
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.silver,
    paddingHorizontal: 9,
  },
  sectionLabel: {
    fontSize: 20,
    color: Colors.gray,
    marginLeft: 6,
  },
  icoBtn: {
    width: 30,
    marginLeft: 5,
    marginBottom: 5,
  },
  ionIcon: {
    marginTop: 4,
    marginLeft: 9,
    marginRight: 6,
  },
  filterContainer: {
    height: 46,
    flexDirection: 'row',
    flex: 2,
  },
  smFilterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

class HouseLotsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.fetchHouses = this.fetchHouses.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
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

  render() {
    const { houseLots, isFetching, error } = this.props;
    if (!houseLots.length && isFetching) return <ActivityIndicator size="large" color={Colors.lightGray} />;
    return (
      <>
        <View style={[styles.sortContainer, { display: houseLots ? 'flex' : 'none' }]}>
          <View style={styles.filterContainer}>
            <View style={styles.smFilterContainer}>
              <Text style={styles.sectionLabel}>Sort by</Text>
              <Icon.Ionicons
                name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'}
                color={Colors.gray}
                size={26}
                style={styles.ionIcon}
              />
              <View style={styles.icoBtn}>
                <IcoButton
                  text=""
                  color={Colors.silver}
                  onPress={() => {}}
                  textColor={Colors.black}
                  iconColor={Colors.gray}
                  iosIcon="ios-arrow-round-down"
                  otherIcon="md-arrow-round-down"
                />
              </View>
              <View style={styles.icoBtn}>
                <IcoButton
                  text=""
                  color={Colors.silver}
                  onPress={() => {}}
                  textColor={Colors.black}
                  iconColor={Colors.gray}
                  iosIcon="ios-arrow-round-up"
                  otherIcon="md-arrow-round-up"
                />
              </View>
            </View>
          </View>
          <View style={[styles.filterContainer, { justifyContent: 'flex-end' }]}>
            <View style={styles.smFilterContainer}>
              <Text style={styles.sectionLabel}>by</Text>
              <Icon.Ionicons
                name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'}
                color={Colors.gray}
                size={26}
                style={styles.ionIcon}
              />
              <View style={styles.icoBtn}>
                <IcoButton
                  text=""
                  color={Colors.silver}
                  onPress={() => {}}
                  textColor={Colors.black}
                  iconColor={Colors.gray}
                  iosIcon="ios-arrow-round-down"
                  otherIcon="md-arrow-round-down"
                />
              </View>
              <View style={styles.icoBtn}>
                <IcoButton
                  text=""
                  color={Colors.silver}
                  onPress={() => {}}
                  textColor={Colors.black}
                  iconColor={Colors.gray}
                  iosIcon="ios-arrow-round-up"
                  otherIcon="md-arrow-round-up"
                />
              </View>
            </View>
          </View>
        </View>
        <FlatList
          data={houseLots}
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
