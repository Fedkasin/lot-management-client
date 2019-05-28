import React from 'react';
import {
  View, StyleSheet, Text, Platform, TouchableOpacity, Image,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../store/actions/index';
import t from '../../helpers/i18helper';
import IonIcon from '../core/IonIcon';
import { JOB_WATCH_SCREEN } from '../../constants/Routes';
import * as Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.silver,
    marginBottom: 9,
    borderRadius: 9,
    marginHorizontal: 9,
  },
  job: {
    fontSize: 16,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  jobCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 6,
    width: 60,
    height: 50,
    borderRightColor: Colors.lightGray,
    borderRightWidth: 1,
  },
  jobButtons: {
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    flexDirection: 'row',
    width: 70,
    height: '100%',
  },
  buttonRemove: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.red,
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
  },
  buttonPlayPause: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightArrow: {
    marginRight: 4,
    marginLeft: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
  },
  jobBody: {
    flexDirection: 'row',
    flex: 1,
  },
  countLabel: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  fetcherLogo: {
    width: 21,
    height: 21,
  },
  cardLabel: {
    fontSize: 14,
    marginLeft: 3,
    fontWeight: '500',
    color: Colors.gray,
  },
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    paddingTop: 6,
    paddingBottom: 6,
  },
  cardItemInner: {
    textAlign: 'left',
  },
  priceCard: {
    width: 85,
    height: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  roundSpot: {
    backgroundColor: Colors.red,
    width: 22,
    height: 22,
    borderRadius: 11,
    paddingBottom: Platform.OS === 'ios' ? 0 : 1,
    paddingLeft: Platform.OS === 'ios' ? 1 : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    backgroundColor: Colors.white,
    width: 16,
    height: 16,
    borderRadius: 8,
  },
});

class HouseJob extends React.PureComponent {
  onClickViewJob(navigation, onUpdateHouseWatchLots, item) {
    onUpdateHouseWatchLots(item.jobId);
    navigation.navigate(JOB_WATCH_SCREEN);
  }

  render() {
    const {
      item, onPlayPause, onClose, iosIcon, otherIcon, isEditing, navigation, onUpdateHouseWatchLots,
    } = this.props;
    const { apartments } = item.apartments.onliner ? item : { apartments: { onliner: { apartments: [] } } };
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.onClickViewJob(navigation, onUpdateHouseWatchLots, item)}
          style={styles.job}
        >
          <View style={styles.jobCard}>
            <Image
              style={styles.fetcherLogo}
              source={require('../../../assets/images/onlinerby.png')}
            />
            <View style={[styles.roundSpot, { marginLeft: 4 }]}>
              <Text style={styles.countLabel}>
                {`${apartments.onliner.apartments.length}`}
              </Text>
            </View>
          </View>
          <View style={styles.jobBody}>
            <View style={styles.cardItem}>
              <View style={styles.cardItemInner}>
                <Text style={styles.cardLabel}>
                  {t('PRICE')}
                </Text>
                <View style={styles.priceCard}>
                  <Text style={styles.cardLabel}>
                    {`$${item.params.min}`}
                  -
                    { item.params.max }
                  </Text>
                </View>
              </View>
              <View style={styles.cardItemInner}>
                <Text style={styles.cardLabel}>
                  {t('ROOMS')}
                </Text>
                <View style={styles.priceCard}>
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
          </View>
          <View style={styles.jobButtons}>
            <TouchableOpacity
              style={[styles.buttonPlayPause, { display: isEditing ? 'flex' : 'none' }]}
              onPress={onPlayPause}
            >
              <IonIcon
                name={Platform.OS === 'ios' ? iosIcon : otherIcon}
                color={Colors.gray}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonRemove, { display: isEditing ? 'flex' : 'none' }]}
              onPress={onClose}
            >
              <IonIcon
                name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
                color={Colors.gray}
              />
            </TouchableOpacity>
            <View style={[styles.rightArrow, { display: isEditing ? 'none' : 'flex' }]}>
              <View style={
                [styles.activityIndicator,
                  {
                    marginRight: 4,
                    marginBottom: Platform.OS === 'ios' ? 2 : 0,
                    backgroundColor: item.state === 'RUNNING' ? Colors.green : Colors.yellow,
                  },
                ]
              }
              />
              <IonIcon
                name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'}
                color={Colors.gray}
              />
            </View>
          </View>
        </TouchableOpacity>
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
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  iosIcon: PropTypes.string.isRequired,
  otherIcon: PropTypes.string.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  onUpdateHouseWatchLots: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(HouseJob));
