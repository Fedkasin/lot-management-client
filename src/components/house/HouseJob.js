import React from 'react';
import {
  View, StyleSheet, Text, Platform, TouchableOpacity, Image,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../store/actions/index';
import IonIcon from '../core/IonIcon';
import { JOB_WATCH_SCREEN } from '../../constants/Routes';
import * as Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Colors.silver,
    borderBottomWidth: 1,
    backgroundColor: Colors.silver,
    marginBottom: 9,
    borderRadius: 9,
    height: 120,
  },
  job: {
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    flexDirection: 'row',
  },
  jobCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: Colors.lightGray,
    borderRightWidth: 1,
    height: 100,
    width: 110,
  },
  jobButtons: { display: 'flex', flexDirection: 'column' },
  countLabel: {
    color: Colors.gray,
    fontSize: 16,
    fontWeight: '500',
    marginRight: 2,
  },
  fetcherLogo: { width: 80, height: 25 },
  foundCountCard: {
    marginTop: 12,
    flexDirection: 'row',
  },
  cardLabelMl9: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.gray,
    marginLeft: 9,
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.gray,
  },
  priceCard: {
    width: 90,
    height: 35,
    marginLeft: 9,
    alignItems: 'center',
    flexDirection: 'row',
  },
  priceLabel: { color: Colors.gray, fontSize: 14, fontWeight: '500' },
  seeAllButton: {
    backgroundColor: Colors.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
    height: 30,
    borderRadius: 6,
    marginTop: 12,
    marginLeft: 'auto',
    marginRight: 0,
  },
  seeAllButtonLabel: { fontSize: 14, fontWeight: '500', color: Colors.white },
  roomsCountCard: {
    width: 70,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

class HouseJob extends React.PureComponent {
  onClickViewJob(navigation, onUpdateHouseWatchLots, item) {
    onUpdateHouseWatchLots(item.jobId);
    navigation.navigate(JOB_WATCH_SCREEN);
  }

  render() {
    const {
      index, item, onPlayPause, onClose, iosIcon, otherIcon, isEditing, navigation, onUpdateHouseWatchLots,
    } = this.props;
    const { apartments } = item.apartments.onliner ? item : { apartments: { onliner: { apartments: [] } } };
    return (
      <View style={styles.container}>
        <View style={styles.job}>
          <View style={styles.jobCard}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.countLabel}>
                {`#${index}`}
              </Text>
              <Image
                style={styles.fetcherLogo}
                source={require('../../../assets/images/onlinerby.png')}
              />
            </View>
            <View style={styles.foundCountCard}>
              <IonIcon
                name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
                color={Colors.gray}
              />
              <Text style={styles.countLabel}>
                { apartments.onliner.apartments.length }
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'column', height: 80 }}>
            <Text style={styles.cardLabelMl9}>
            PRICE
            </Text>
            <View style={styles.priceCard}>
              <IonIcon
                name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'}
                color={Colors.gray}
              />
              <Text style={styles.priceLabel}>
                { item.params.min }
              -
                { item.params.max }
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => this.onClickViewJob(navigation, onUpdateHouseWatchLots, item)}
              style={styles.seeAllButton}
            >
              <IonIcon
                name={Platform.OS === 'ios' ? 'ios-eye' : 'md-eye'}
                color={Colors.gray}
              />
              <Text style={styles.seeAllButtonLabel}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'column', height: 80, marginLeft: 2 }}>
            <Text style={styles.cardLabel}>
            ROOMS
            </Text>
            <View style={styles.roomsCountCard}>
              <IonIcon
                name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
                color={Colors.gray}
              />
              <Text style={styles.cardLabel}>
                { item.params.rooms.toString() }
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.jobButtons}>
          <TouchableOpacity
            style={{ padding: 5, display: isEditing ? 'flex' : 'none' }}
            onPress={onClose}
          >
            <IonIcon
              name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
              color={Colors.gray}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 5, marginRight: 5 }}
            onPress={onPlayPause}
          >
            <IonIcon
              name={Platform.OS === 'ios' ? iosIcon : otherIcon}
              color={Colors.gray}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    houseWatchLots: state.houseWatchLotsReducers.houseWatchLots,
    error: state.houseWatchLotsReducers.error ? state.houseWatchLotsReducers.error : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateHouseWatchLots: value => dispatch(actions.houseWatchLotsActions.updateHouseWatchLots(value)),
  };
}

HouseJob.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  iosIcon: PropTypes.string.isRequired,
  otherIcon: PropTypes.string.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  onUpdateHouseWatchLots: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(HouseJob));
